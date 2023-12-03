import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Prisma, User } from '@prisma/client';
import { UserService } from '../user/user.service';

enum MessageError {
  MESSAGE_NOT_FOUND = 'MESSAGE_NOT_FOUND',
  SENDER_NOT_FOUND = 'SENDER_NOT_FOUND',
  RECEIVER_NOT_FOUND = 'RECEIVER_NOT_FOUND',
}

@Injectable()
export class MessageService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService
  ) {}

  async getMessages() {
    return this.prisma.message.findMany();
  }

  getMessagesByReceiverId(receiver_id: string) {
    return this.prisma.message.findMany({ where: { receiver_id } });
  }

  async getMessageById(message_id: string) {
    const message = await this.prisma.message.findFirst({
      where: { id: message_id },
    });

    if (!message) {
      throw new NotFoundException(MessageError.MESSAGE_NOT_FOUND);
    }

    return message;
  }

  async createMessage(message: Prisma.MessageUncheckedCreateInput) {
    let sender: User;
    let receiver: User;

    try {
      sender = await this.userService.getUserById(message.sender_id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(MessageError.SENDER_NOT_FOUND);
      }
    }
    try {
      receiver = await this.userService.getUserById(message.receiver_id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(MessageError.RECEIVER_NOT_FOUND);
      }
    }

    return this.prisma.message.create({
      data: {
        text: message.text,
        sender: { connect: { id: sender.id } },
        receiver: { connect: { id: receiver.id } },
      },
    });
  }
}
