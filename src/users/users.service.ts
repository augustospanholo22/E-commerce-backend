import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service.js';
import { CreateUsuarioDto } from '../dtos/create-user-dto.js';
import * as bcrypt from 'bcrypt';
import { UpdateUsuarioDto } from '../dtos/update-user-dto.js';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async create(dto: CreateUsuarioDto) {
    const senhaHash = await bcrypt.hash(dto.senha, 10);

    return this.prisma.usuario.create({
      data: {
        nome: dto.nome,
        email: dto.email,
        senha: senhaHash,
      },
      select: {
        id: true,
        nome: true,
        email: true,
      },
    });
  }

  findAll() {
    return this.prisma.usuario.findMany({
      select: {
        id: true,
        nome: true,
        email: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.usuario.findUnique({
      where: { id },
      select: {
        id: true,
        nome: true,
        email: true,
      },
    });
  }

  async update(id: number, dto: UpdateUsuarioDto) {
    const dados: any = {
      nome: dto.nome,
      email: dto.email,
    };

    if (dto.senha) {
      dados.senha = await bcrypt.hash(dto.senha, 10);
    }

    return this.prisma.usuario.update({
      where: { id },
      data: dados,
      select: {
        id: true,
        nome: true,
        email: true,
      },
    });
  }

  delete(id: number) {
    return this.prisma.usuario.delete({
      where: { id },
      select: {
        id: true,
        nome: true,
        email: true,
      },
    });
  }
}