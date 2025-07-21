import {
  IsEmail,
  IsString,
  MinLength,
  Matches,
  IsNotEmpty,
} from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2, { message: 'Name must be at least 2 characters long' })
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2, { message: 'Name must be at least 2 characters long' })
  lastName: string;

  @IsEmail({}, { message: 'Please provide a valid email address' })
  @Matches(/@ttu\.edu\.gh$/, {
    message: 'Email must end with @ttu.edu.gh',
  })
  email: string;

  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, {
    message:
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
  })
  password: string;
}
