import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(@Body() signUpDto: SignUpDto): Promise<{ message: string }> {
      await this.authService.signUp(signUpDto);
      return { message: 'User successfully signed up!' };
  }

  @Post('/login') // Assuming it's a POST request for login
  async login(@Body() loginDto: LoginDto): Promise<{ userId: string; token: string }> {
    const { userId, token } = await this.authService.login(loginDto);
    return { userId, token };
  }
}