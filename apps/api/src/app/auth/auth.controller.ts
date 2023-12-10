import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginCommand, RegisterCommand } from './commands';
import { ApiTags } from '@nestjs/swagger';
import { Public } from './decorators';
import { RegisterDto } from './dtos';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('register')
  async register(@Body() data: RegisterCommand) {
    console.log('regitering', data);
    const user = await this.authService.register(data);

    return new RegisterDto().fromDomain(user);
  }

  @Public()
  @Post('login')
  async login(@Body() data: LoginCommand) {
    return this.authService.login(data);
  }
}
