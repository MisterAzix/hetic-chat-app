import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Prisma, User } from '@prisma/client';

enum UserError {
  USER_NOT_FOUND = 'USER_NOT_FOUND',
}

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUsers(): Promise<Omit<User, 'password'>[]> {
    const users = await this.prisma.user.findMany();

    return users.map((user) => this.excludeUserKeys(user, ['password']));
  }

  async getUserById(user_id: string): Promise<Omit<User, 'password'>> {
    const user = await this.prisma.user.findFirst({ where: { id: user_id } });

    if (!user) {
      throw new NotFoundException(UserError.USER_NOT_FOUND);
    }

    return this.excludeUserKeys(user, ['password']);
  }

  async getUserByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findFirst({ where: { email } });

    if (!user) {
      throw new NotFoundException(UserError.USER_NOT_FOUND);
    }

    return user;
  }

  async createUser(
    user: Pick<User, 'email' | 'password'>
  ): Promise<Omit<User, 'password'>> {
    const newUser = await this.prisma.user.create({ data: user });

    return this.excludeUserKeys(newUser, ['password']);
  }

  async updateUser(
    user_id: string,
    data: Omit<Prisma.UserUpdateInput, 'password'>
  ): Promise<Omit<User, 'password'>> {
    const user = await this.prisma.user.update({
      where: { id: user_id },
      data,
    });

    if (!user) {
      throw new NotFoundException(UserError.USER_NOT_FOUND);
    }

    return this.excludeUserKeys(user, ['password']);
  }

  async deleteUser(user_id: string): Promise<Omit<User, 'password'>> {
    const user = await this.prisma.user.delete({ where: { id: user_id } });

    if (!user) {
      throw new NotFoundException(UserError.USER_NOT_FOUND);
    }

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
