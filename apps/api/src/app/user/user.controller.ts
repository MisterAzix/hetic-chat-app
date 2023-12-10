import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { UpdateUserCommand } from './commands';
import { DeleteUserDto, GetUserDto, GetUsersDto, UpdateUserDto } from './dtos';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers() {
    const users = await this.userService.getUsers();

    return new GetUsersDto().fromDomain(users);
  }

  @Get(':id')
  async getUser(@Param('id') user_id: string) {
    const user = await this.userService.getUserById(user_id);

    return new GetUserDto().fromDomain(user);
  }

  @Post(':id')
  async updateUser(
    @Param('id') user_id: string,
    @Body() data: UpdateUserCommand
  ) {
    const user = await this.userService.updateUser(user_id, data);

    return new UpdateUserDto().fromDomain(user);
  }

  @Delete(':id')
  async deleteUser(@Param('id') user_id: string) {
    const user = await this.userService.deleteUser(user_id);

    return new DeleteUserDto().fromDomain(user);
  }
}
