import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service.js';
import { CreateProfileDto } from '../dtos/create-profile-dto.js';

@Injectable()
export class ProfilesService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateProfileDto) {
    return this.prisma.profile.create({
      data: {
        usuarioId: dto.usuarioId,
        telefone: dto.telefone,
        endereco: dto.endereco,
      },
    });
  }

  findAll() {
    return this.prisma.profile.findMany({
      include: {
        usuario: {
          select: {
            id: true,
            nome: true,
            email: true,
          },
        },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.profile.findUnique({
      where: { id },
      include: {
        usuario: {
          select: {
            id: true,
            nome: true,
            email: true,
          },
        },
      },
    });
  }

  update(id: number, dto: CreateProfileDto) {
    return this.prisma.profile.update({
      where: { id },
      data: {
        usuarioId: dto.usuarioId,
        telefone: dto.telefone,
        endereco: dto.endereco,
      },
    });
  }

  delete(id: number) {
    return this.prisma.profile.delete({
      where: { id },
    });
  }
}