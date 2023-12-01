import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async getUser(user_id: string) {
    return this.prisma.user.findFirst({ where: { id: user_id } });
  }
  async getUsers() {
    return this.prisma.user.findMany();
  }
}
