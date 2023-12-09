import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from './dtos';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id') user_id: string) {
    return this.userService.getUserById(user_id);
  }

  @Post(':id')
  updateUser(@Param('id') user_id: string, @Body() data: UpdateUserDto) {
    return this.userService.updateUser(user_id, data);
  }

  @Delete(':id')
  deleteUser(@Param('id') user_id: string) {
    return this.userService.deleteUser(user_id);
  }
}
