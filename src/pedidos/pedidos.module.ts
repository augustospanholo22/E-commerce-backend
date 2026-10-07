import { Module } from '@nestjs/common';
import { PedidosController } from './pedidos.controller.js';
import { PedidosService } from './pedidos.service.js';
import { PrismaService } from '../database/prisma.service.js';
import { AuthModule } from '../auth/auth.module.js';

@Module({
   imports: [AuthModule],
  controllers: [PedidosController],
  providers: [PedidosService, PrismaService],
})
export class PedidosModule {}