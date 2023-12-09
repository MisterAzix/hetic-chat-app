import { User } from '@prisma/client';

export class GetUsersDto {
  fromDomain(users: User[]): Omit<User, 'password'>[] {
    return users.map((user) => ({
      id: user.id,
      email: user.email,
      name: user.name,
      created_at: user.created_at,
      updated_at: user.updated_at,
    }));
  }
}
