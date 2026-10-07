import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service.js';
import { CreatePedidoDto } from '../dtos/create-pedido-dto.js';

@Injectable()
export class PedidosService {
  constructor(private prisma: PrismaService) { }

  create(dto: CreatePedidoDto) {
    return this.prisma.pedido.create({
      data: {
        usuarioId: dto.usuarioId,
        valorTotal: dto.valorTotal,
        status: dto.status,
      },
    });
  }

  findAll() {
    return this.prisma.pedido.findMany();
  }

  findOne(id: number) {
    return this.prisma.pedido.findUnique({
      where: { id },
      include: {
        usuario: {
          select: {
            id: true,
            nome: true,
            email: true,
          },
        },
        itens: {
          include: {
            produto: true,
          },
        },
      },
    });
  }

  update(id: number, dto: CreatePedidoDto) {
    return this.prisma.pedido.update({
      where: { id },
      data: {
        usuarioId: dto.usuarioId,
        valorTotal: dto.valorTotal,
        status: dto.status,
      },
    });
  }

  delete(id: number) {
    return this.prisma.pedido.delete({
      where: { id },
    });
  }
}