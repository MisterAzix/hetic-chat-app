import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { PrismaService } from '../../prisma.service';
import { UserService } from '../user/user.service';

@Module({
  providers: [MessageService, PrismaService, UserService],
  controllers: [MessageController],
})
export class MessageModule {}
