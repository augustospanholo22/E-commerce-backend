import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service.js';
import { CreateItemPedidoDto } from '../dtos/create-item-pedido-dto.js';

@Injectable()
export class ItensPedidoService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateItemPedidoDto) {
    return this.prisma.itemPedido.create({
      data: {
        pedidoId: dto.pedidoId,
        produtoId: dto.produtoId,
        quantidade: dto.quantidade,
        precoUnitario: dto.precoUnitario,
      },
    });
  }

  findAll() {
    return this.prisma.itemPedido.findMany();
  }

  findOne(id: number) {
    return this.prisma.itemPedido.findUnique({
      where: { id },
    });
  }

  update(id: number, dto: CreateItemPedidoDto) {
    return this.prisma.itemPedido.update({
      where: { id },
      data: {
        pedidoId: dto.pedidoId,
        produtoId: dto.produtoId,
        quantidade: dto.quantidade,
        precoUnitario: dto.precoUnitario,
      },
    });
  }

  delete(id: number) {
    return this.prisma.itemPedido.delete({
      where: { id },
    });
  }
}