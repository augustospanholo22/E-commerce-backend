import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../database/prisma.service.js';
import { LoginDto } from '../dtos/login-dto.js';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor( private prisma: PrismaService, private jwtService: JwtService ) {}

  async login(dto: LoginDto) {
    const usuario = await this.prisma.usuario.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!usuario) {
      throw new UnauthorizedException('Email ou senha inválidos');
    }

    const senhaValida = await bcrypt.compare(
      dto.senha,
      usuario.senha,
    );

    if (!senhaValida) {
      throw new UnauthorizedException('Email ou senha inválidos');
    }

    const token = await this.jwtService.signAsync({
      sub: usuario.id,
      email: usuario.email,
    });

    return {
      access_token: token,
    };
  }
}