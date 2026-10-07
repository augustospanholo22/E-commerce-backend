import { Module } from '@nestjs/common';
import { ProdutosController } from './produtos.controller.js';
import { ProdutosService } from './produtos.service.js';
import { PrismaService } from '../database/prisma.service.js';
import { AuthModule } from '../auth/auth.module.js';

@Module({
  imports: [AuthModule],
  controllers: [ProdutosController],
  providers: [ProdutosService, PrismaService],
})
export class ProdutosModule {}