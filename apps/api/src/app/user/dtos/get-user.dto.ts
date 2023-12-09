import { User } from '@prisma/client';

export class GetUserDto {
  fromDomain(user: User): Omit<User, 'password'> {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      created_at: user.created_at,
      updated_at: user.updated_at,
    };
  }
}
