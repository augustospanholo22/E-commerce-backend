import { Module } from '@nestjs/common';
import { ItensPedidoController } from './itens-pedido.controller.js';
import { ItensPedidoService } from './itens-pedido.service.js';
import { PrismaService } from '../database/prisma.service.js';
import { AuthModule } from '../auth/auth.module.js';

@Module({
  imports: [AuthModule],
  controllers: [ItensPedidoController],
  providers: [ItensPedidoService, PrismaService],
})
export class ItensPedidoModule {}