import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ProdutosService } from './produtos.service.js';
import { CreateProdutoDto } from '../dtos/create-produtos-dto.js';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';

@Controller('produtos')
export class ProdutosController {
    constructor(private readonly produtosService: ProdutosService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() dto: CreateProdutoDto) {
        return this.produtosService.create(dto);
    }

    @Get()
    findAll() {
        return this.produtosService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.produtosService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() dto: CreateProdutoDto) {
        return this.produtosService.update(id, dto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.produtosService.delete(id);
    }
}