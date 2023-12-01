import { ConflictException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from '../user/user.service';
import bcrypt from 'bcrypt';

enum UserError {
  EMAIL_ALREADY_EXISTS = 'EMAIL_ALREADY_EXISTS',
}

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async register(
    registerData: Pick<User, 'email' | 'password'>
  ): Promise<Omit<User, 'password'>> {
    const password = await bcrypt.hash(registerData.password, 12);

    const userExists = await this.userService.getUserByEmail(
      registerData.email
    );
    if (userExists) {
      throw new ConflictException(UserError.EMAIL_ALREADY_EXISTS);
    }
    const user = await this.userService.createUser({
      ...registerData,
      password,
    });
    return this.excludeUserKeys(user, ['password']);
  }

  private excludeUserKeys<User, Key extends keyof User>(
    user: User,
    keys: Key[]
  ): Omit<User, Key> {
    return Object.fromEntries(
      Object.entries(user).filter(([key]) => !keys.includes(key as Key))
    ) as Omit<User, Key>;
  }
}
