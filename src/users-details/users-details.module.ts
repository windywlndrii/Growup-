import { Module } from '@nestjs/common';
import { UsersDetailsService } from './users-details.service';
import { UsersDetailsController } from './users-details.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UsersDetailsController],
  providers: [UsersDetailsService],
})
export class UsersDetailsModule {}
