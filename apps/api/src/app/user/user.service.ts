import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { User } from '@prisma/client';

enum UserError {
  USER_NOT_FOUND = 'USER_NOT_FOUND',
}

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUsers() {
    return this.prisma.user.findMany();
  }

  async getUserById(user_id: string) {
    const user = await this.prisma.user.findFirst({ where: { id: user_id } });

    if (!user) {
      throw new NotFoundException(UserError.USER_NOT_FOUND);
    }

    return user;
  }

  async getUserByEmail(email: string) {
    const user = await this.prisma.user.findFirst({ where: { email } });

    if (!user) {
      throw new NotFoundException(UserError.USER_NOT_FOUND);
    }

    return user;
  }

  async createUser(user: Pick<User, 'email' | 'password'>) {
    return this.prisma.user.create({ data: user });
  }
}
