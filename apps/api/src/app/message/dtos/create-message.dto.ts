import { Prisma } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMessageDto implements Prisma.MessageUncheckedCreateInput {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  text: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  sender_id: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  receiver_id: string;
}
