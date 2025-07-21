import { 
  Injectable, 
  UnauthorizedException, 
  BadRequestException, 
  ConflictException,
  NotFoundException 
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { MailerService } from '../../shared/service/mail.service';
import { RegisterDto } from './dto/register.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  private readonly SALT_ROUNDS = 12;
  private readonly OTP_EXPIRY_MINUTES = 10;

  constructor(
    @InjectRepository(UserEntity) 
    private readonly usersRepo: Repository<UserEntity>,
    private readonly jwtService: JwtService,
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService,
  ) {}

  async register(registerDto: RegisterDto) {
    const normalizedEmail = registerDto.email.trim().toLowerCase();
    const existingUser = await this.usersRepo.findOne({ 
      where: { email: normalizedEmail } 
    });
    
    if (existingUser) {
      throw new ConflictException('Email already registered');
    }

    const hashedPassword = await bcrypt.hash(registerDto.password, this.SALT_ROUNDS);
    const otp = this.generateOtp();
    const otpExpiry = this.getOtpExpiry();

    const user = this.usersRepo.create({
      name: registerDto.firstName + " "+ registerDto.lastName,
      email: normalizedEmail,
      password: hashedPassword,
      otp,
      otpExpiry,
    });

    await this.usersRepo.save(user);
    await this.mailerService.sendOtpEmail(normalizedEmail, otp);

    return { 
      message: 'Registration successful. OTP sent to email.',
      email: normalizedEmail 
    };
  }

  async verifyOtp(email: string, otp: string) {
    const user = await this.usersRepo.findOne({ where: { email } });
    
    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (!user.otp || user.otp !== otp) {
      throw new UnauthorizedException('Invalid OTP');
    }

    if (user.otpExpiry && new Date() > user.otpExpiry) {
      throw new UnauthorizedException('OTP has expired');
    }

    user.isVerified = true;
    user.otp = null;
    user.otpExpiry = null;
    await this.usersRepo.save(user);

    return { message: 'Email verified successfully. You can now login.' };
  }

  async login(email: string, password: string) {
    const user = await this.usersRepo.findOne({ where: { email } });
    
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (!user.isVerified) {
      throw new UnauthorizedException('Please verify your email first');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { email: user.email, sub: user.id, role: user.role };
    const accessToken = this.jwtService.sign(payload);

    return { 
      accessToken,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      }
    };
  }

  async forgotPassword(email: string) {
    const user = await this.usersRepo.findOne({ where: { email } });
    
    if (!user) {
      return { message: 'If the email exists, OTP has been sent for password reset.' };
    }

    const otp = this.generateOtp();
    const otpExpiry = this.getOtpExpiry();
    
    user.otp = otp;
    user.otpExpiry = otpExpiry;
    await this.usersRepo.save(user);

    await this.mailerService.sendPasswordResetEmail(email, otp);

    return { message: 'If the email exists, OTP has been sent for password reset.' };
  }

  async resetPassword(email: string, otp: string, newPassword: string) {
    const user = await this.usersRepo.findOne({ where: { email } });
    
    if (!user) {
      throw new UnauthorizedException('Invalid OTP');
    }

    if (!user.otp || user.otp !== otp) {
      throw new UnauthorizedException('Invalid OTP');
    }

    if (user.otpExpiry && new Date() > user.otpExpiry) {
      throw new UnauthorizedException('OTP has expired');
    }

    const hashedPassword = await bcrypt.hash(newPassword, this.SALT_ROUNDS);
    
    user.password = hashedPassword;
    user.otp = null;
    user.otpExpiry = null;
    await this.usersRepo.save(user);

    return { message: 'Password reset successfully' };
  }

  private generateOtp(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  private getOtpExpiry(): Date {
    const expiry = new Date();
    expiry.setMinutes(expiry.getMinutes() + this.OTP_EXPIRY_MINUTES);
    return expiry;
  }
}
