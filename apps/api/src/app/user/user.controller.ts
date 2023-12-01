import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get(':id')
  getUser(@Param('id') user_id: string) {
    return this.userService.getUserById(user_id);
  }
  @Get()
  getUsers() {
    return this.userService.getUsers();
  }
}
