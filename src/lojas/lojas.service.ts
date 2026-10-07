import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service.js';
import { CreateLojaDto } from '../dtos/create-loja-dto.js';

@Injectable()
export class LojasService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateLojaDto) {
    return this.prisma.loja.create({
      data: {
        nome: dto.nome,
        descricao: dto.descricao,
        usuarioId: dto.usuarioId,
      },
    });
  }

  findAll() {
    return this.prisma.loja.findMany();
  }

  findOne(id: number) {
    return this.prisma.loja.findUnique({
      where: { id },
      include: {
        produtos: true,
      },
    });
  }

  update(id: number, dto: CreateLojaDto) {
    return this.prisma.loja.update({
      where: { id },
      data: {
        nome: dto.nome,
        descricao: dto.descricao,
        usuarioId: dto.usuarioId,
      },
    });
  }

  delete(id: number) {
    return this.prisma.loja.delete({
      where: { id },
    });
  }
}