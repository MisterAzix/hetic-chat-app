import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageCommand } from './commands';
import { ApiTags } from '@nestjs/swagger';
import { Public } from '../auth/decorators';

@ApiTags('Message')
@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Public()
  @Get()
  getMessages() {
    return this.messageService.getMessages();
  }

  @Public()
  @Get('receiver/:id')
  getMessagesByReceiverId(@Param('id') id: string) {
    return this.messageService.getMessagesByReceiverId(id);
  }

  @Get(':id')
  getMessagesById(@Param('id') id: string) {
    return this.messageService.getMessageById(id);
  }

  @Public()
  @Post()
  createMessage(@Body() data: CreateMessageCommand) {
    return this.messageService.createMessage(data);
  }
}
