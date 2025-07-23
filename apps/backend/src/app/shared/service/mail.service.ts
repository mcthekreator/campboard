import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailerService {
  private readonly logger = new Logger(MailerService.name);
  private readonly transporter: nodemailer.Transporter;

  constructor(private readonly configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: this.configService.get<string>('MAIL_USER'),
        pass: this.configService.get<string>('MAIL_PASS'),
      },
    });
  }

  async sendOtpEmail(to: string, otp: string): Promise<void> {
    try {
      const mailOptions = {
        from: `"CampBoard" <${this.configService.get<string>('MAIL_USER')}>`,
        to,
        subject: 'Email Verification - CampBoard',
        html: this.getOtpEmailTemplate(otp),
      };

      await this.transporter.sendMail(mailOptions);
      this.logger.log(`OTP email sent successfully to ${to}`);
    } catch (error) {
      this.logger.error(`Failed to send OTP email to ${to}:`, error);
      throw new Error('Failed to send verification email');
    }
  }

  async sendPasswordResetEmail(to: string, otp: string): Promise<void> {
    try {
      const mailOptions = {
        from: `"CampBoard" <${this.configService.get<string>('MAIL_USER')}>`,
        to,
        subject: 'Password Reset - CampBoard',
        html: this.getPasswordResetEmailTemplate(otp),
      };

      await this.transporter.sendMail(mailOptions);
      this.logger.log(`Password reset email sent successfully to ${to}`);
    } catch (error) {
      this.logger.error(`Failed to send password reset email to ${to}:`, error);
      throw new Error('Failed to send password reset email');
    }
  }
  
async sendResetLinkEmail(to: string, resetLink: string): Promise<void> {
  try {
    const mailOptions = {
      from: `"CampBoard" <${this.configService.get<string>('MAIL_USER')}>`,
      to,
      subject: 'Password Reset Link - CampBoard',
      html: this.getResetLinkEmailTemplate(resetLink),
    };

    await this.transporter.sendMail(mailOptions);
    this.logger.log(`Password reset link sent successfully to ${to}`);
  } catch (error) {
    this.logger.error(`Failed to send password reset link to ${to}:`, error);
    throw new Error('Failed to send password reset link');
  }
}

private getResetLinkEmailTemplate(link: string): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">Password Reset Request</h2>
      <p>Hello,</p>
      <p>You requested a password reset. Click the button below to set a new password:</p>
      <div style="text-align: center; margin: 20px 0;">
        <a href="${link}" style="background-color: #007bff; color: #fff; padding: 12px 20px; text-decoration: none; border-radius: 5px;">Reset Password</a>
      </div>
      <p>If the button above doesn't work, copy and paste the link below into your browser:</p>
      <p style="word-break: break-all;">${link}</p>
      <p>This link will expire in 15 minutes.</p>
      <p>If you didn't request this password reset, you can ignore this email.</p>
      <hr style="border: 1px solid #eee; margin: 30px 0;">
      <p style="color: #666; font-size: 12px;">CampBoard</p>
    </div>
  `;
}

  private getOtpEmailTemplate(otp: string): string {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Email Verification</h2>
        <p>Hello,</p>
        <p>Your verification code is:</p>
        <div style="background-color: #f5f5f5; padding: 20px; text-align: center; margin: 20px 0;">
          <h1 style="color: #007bff; margin: 0; font-size: 32px; letter-spacing: 5px;">${otp}</h1>
        </div>
        <p>This code will expire in 10 minutes.</p>
        <p>If you didn't request this verification, please ignore this email.</p>
        <hr style="border: 1px solid #eee; margin: 30px 0;">
        <p style="color: #666; font-size: 12px;">CampBoard</p>
      </div>
    `;
  }

  private getPasswordResetEmailTemplate(otp: string): string {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Password Reset</h2>
        <p>Hello,</p>
        <p>You requested a password reset. Your verification code is:</p>
        <div style="background-color: #f5f5f5; padding: 20px; text-align: center; margin: 20px 0;">
          <h1 style="color: #dc3545; margin: 0; font-size: 32px; letter-spacing: 5px;">${otp}</h1>
        </div>
        <p>This code will expire in 10 minutes.</p>
        <p>If you didn't request this password reset, please ignore this email.</p>
        <hr style="border: 1px solid #eee; margin: 30px 0;">
        <p style="color: #666; font-size: 12px;">CampBoard</p>
      </div>
    `;
  }
  
}