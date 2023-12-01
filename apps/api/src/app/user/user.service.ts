import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUsers() {
    return this.prisma.user.findMany();
  }

  async getUserById(user_id: string) {
    return this.prisma.user.findFirst({ where: { id: user_id } });
  }

  async getUserByEmail(email: string) {
    return this.prisma.user.findFirst({ where: { email } });
  }

  async createUser(user: Pick<User, 'email' | 'password'>) {
    return this.prisma.user.create({ data: user });
  }
}
