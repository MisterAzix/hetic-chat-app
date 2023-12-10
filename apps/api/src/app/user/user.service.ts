import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Prisma, User } from '@prisma/client';

enum UserError {
  USER_NOT_FOUND = 'USER_NOT_FOUND',
}

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async getUserById(user_id: string): Promise<User> {
    const user = await this.prisma.user.findFirst({ where: { id: user_id } });

    if (!user) {
      throw new NotFoundException(UserError.USER_NOT_FOUND);
    }

    return user;
  }

  async getUserByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findFirst({ where: { email } });

    if (!user) {
      throw new NotFoundException(UserError.USER_NOT_FOUND);
    }

    return user;
  }

  async createUser(user: Pick<User, 'email' | 'password'>): Promise<User> {
    return this.prisma.user.create({ data: user });
  }

  async updateUser(
    user_id: string,
    data: Omit<Prisma.UserUpdateInput, 'password'>
  ): Promise<User> {
    const user = await this.prisma.user.update({
      where: { id: user_id },
      data,
    });

    if (!user) {
      throw new NotFoundException(UserError.USER_NOT_FOUND);
    }

    return user;
  }

  async deleteUser(user_id: string): Promise<User> {
    const user = await this.prisma.user.delete({ where: { id: user_id } });

    if (!user) {
      throw new NotFoundException(UserError.USER_NOT_FOUND);
    }

    return user;
  }
}
