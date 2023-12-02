import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dtos';
import { ApiTags } from '@nestjs/swagger';
import { Public } from './decorators';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('register')
  register(@Body() data: RegisterDto) {
    return this.authService.register(data);
  }

  @Public()
  @Post('login')
  login(@Body() data: LoginDto) {
    return this.authService.login(data);
  }
}
