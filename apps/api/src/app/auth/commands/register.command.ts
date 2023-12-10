import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class RegisterCommand implements Prisma.UserCreateInput {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
