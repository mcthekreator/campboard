import { IsEmail, Matches } from 'class-validator';

export class ForgotPasswordDto {
  @IsEmail({}, { message: 'Please provide a valid email address' })
  @Matches(/@ttu\.edu\.gh$/, {
    message: 'Email must end with @ttu.edu.gh',
  })
  email: string;
}