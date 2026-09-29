import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service.js';
import { CreateUsuarioDto } from '../dtos/create-user-dto.js';
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateUsuarioDto) {
    return this.prisma.usuario.create({
      data: {
        nome: dto.nome,
        email: dto.email,
        senha: dto.senha,
      },
    });
  }

  findAll() {
    return this.prisma.usuario.findMany();
  }
}