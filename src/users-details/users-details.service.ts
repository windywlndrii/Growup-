import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUsersDetailDto } from './dto/create-users-detail.dto';
import { UpdateUsersDetailDto } from './dto/update-users-detail.dto';

@Injectable()
export class UsersDetailsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateUsersDetailDto) {
    return this.prisma.userDetails.create({
      data: {
        fullName: dto.fullName,
      address: dto.address,
      nik: dto.nik,
      posyanduUnit: dto.posyanduUnit,

      user: {
        connect: {
          userId: dto.userId, 
       }, 
      },
    },
  });
}

  async findAll() {
    return this.prisma.userDetails.findMany({
      include: {
        user: {
          select: {
            userId: true,
            username: true,
            email: true,
          },
        },
      },
    });
  }

  async findOne(userId: string) {
    return this.prisma.userDetails.findUnique({
      where: { userId },
    });
  }

  async update(userId: string, updateUsersDetailDto: UpdateUsersDetailDto) {
    return this.prisma.userDetails.update({
      where: { userId },
      data: updateUsersDetailDto,
    });
  }

  async remove(userId: string) {
    return this.prisma.userDetails.delete({
      where: { userId },
    });
  }
}
