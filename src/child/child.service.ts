import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';

@Injectable()
export class ChildService {
  constructor(private prisma: PrismaService) {}

  // CREATE
  async create(dto: CreateChildDto) {
    return this.prisma.child.create({
      data: {
        parentUserId: dto.parentUserId,
        fullName: dto.fullName,
        dateOfBirth: new Date(dto.dateOfBirth),
        gender: dto.gender,
        isActive: dto.isActive,
      },
    });
  }

  // READ ALL
  async findAll() {
    return this.prisma.child.findMany({
      include: {
        parentUser: {
          select: {
            userId: true,
            username: true,
            email: true,
          },
        },
      },
    });
  }

  // READ ONE
  async findOne(childId: string) {
    return this.prisma.child.findUnique({
      where: { childId },
    });
  }

  // UPDATE
  async update(childId: string, dto: UpdateChildDto) {
    return this.prisma.child.update({
      where: { childId },
      data: {
        fullName: dto.fullName,
        dateOfBirth: dto.dateOfBirth,
        gender: dto.gender,
        isActive: dto.isActive,
      },
    });
  }

  // DELETE
  async remove(childId: string) {
    return this.prisma.child.delete({
      where: { childId },
    });
  }
}
