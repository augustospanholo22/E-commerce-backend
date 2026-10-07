import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';

import { ItensPedidoService } from './itens-pedido.service.js';
import { CreateItemPedidoDto } from '../dtos/create-item-pedido-dto.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';

@Controller('itens-pedido')
export class ItensPedidoController {
  constructor(
    private itensPedidoService: ItensPedidoService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreateItemPedidoDto) {
    return this.itensPedidoService.create(dto);
  }

  @Get()
  findAll() {
    return this.itensPedidoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.itensPedidoService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: CreateItemPedidoDto,
  ) {
    return this.itensPedidoService.update(id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.itensPedidoService.delete(id);
  }
}