import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';

import { LojasService } from './lojas.service.js';
import { CreateLojaDto } from '../dtos/create-loja-dto.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';

@Controller('lojas')
export class LojasController {
  constructor(private readonly lojasService: LojasService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreateLojaDto) {
    return this.lojasService.create(dto);
  }

  @Get()
  findAll() {
    return this.lojasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.lojasService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: CreateLojaDto,
  ) {
    return this.lojasService.update(id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.lojasService.delete(id);
  }
}