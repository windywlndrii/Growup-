import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { RolesModule } from './roles/roles.module';
import { UsersDetailsModule } from './users-details/users-details.module';
import { ChildModule } from './child/child.module';

@Module({
  imports: [PrismaModule, UsersModule, RolesModule, UsersDetailsModule, ChildModule],
})
export class AppModule {}
