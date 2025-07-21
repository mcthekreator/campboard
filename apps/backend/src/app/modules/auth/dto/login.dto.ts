import { IsEmail, Matches, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsEmail({}, { message: 'Please provide a valid email address' })
  @Matches(/@ttu\.edu\.gh$/, {
    message: 'Email must end with @ttu.edu.gh',
  })
  email: string;

  @IsString()
  @MinLength(1, { message: 'Password is required' })
  password: string;
}