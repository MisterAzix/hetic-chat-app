import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dtos';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Message')
@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get()
  getMessages() {
    return this.messageService.getMessages();
  }

  @Get('receiver/:id')
  getMessagesByReceiverId(@Param('id') id: string) {
    return this.messageService.getMessagesByReceiverId(id);
  }

  @Get(':id')
  getMessagesById(@Param('id') id: string) {
    return this.messageService.getMessageById(id);
  }

  @Post()
  createMessage(@Body() data: CreateMessageDto) {
    return this.messageService.createMessage(data);
  }
}
