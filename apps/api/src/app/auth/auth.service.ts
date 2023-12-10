import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from '../user/user.service';
import bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

enum AuthError {
  EMAIL_ALREADY_EXISTS = 'EMAIL_ALREADY_EXISTS',
  INVALID_PASSWORD = 'INVALID_PASSWORD',
}

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async register(
    registerData: Pick<User, 'email' | 'password'>
  ): Promise<User> {
    const password = await bcrypt.hash(registerData.password, 12);

    const userExists = await this.userService.getUserByEmail(
      registerData.email,
      true
    );

    if (userExists) {
      throw new ConflictException(AuthError.EMAIL_ALREADY_EXISTS);
    }
    return this.userService.createUser({
      ...registerData,
      password,
    });
  }

  async login(loginData: Pick<User, 'email' | 'password'>): Promise<string> {
    const user = await this.userService.getUserByEmail(loginData.email);

    const isPasswordValid = await bcrypt.compare(
      loginData.password,
      user.password
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException(AuthError.INVALID_PASSWORD);
    }

    return this.jwtService.sign({
      sub: user.id,
    });
  }
}
