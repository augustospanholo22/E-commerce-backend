import { Module } from '@nestjs/common';
import { LojasController } from './lojas.controller.js';
import { LojasService } from './lojas.service.js';
import { PrismaService } from '../database/prisma.service.js';
import { AuthModule } from '../auth/auth.module.js';

@Module({
   imports: [AuthModule],
  controllers: [LojasController],
  providers: [LojasService, PrismaService],
})
export class LojasModule {}