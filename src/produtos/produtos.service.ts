import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service.js';
import { CreateProdutoDto } from '../dtos/create-produtos-dto.js';

@Injectable()
export class ProdutosService {
    constructor (private prisma: PrismaService){}

    create(dto:CreateProdutoDto){
        return this.prisma.produto.create({
            data:{
                nome: dto.nome,
                descricao: dto.descricao,
                preco: dto.preco,
                estoque: dto.estoque,
                lojaId: dto.lojaId
            },
        });
    }

    findAll(){
        return this.prisma.produto.findMany();
    }

    findOne(id: number){
        return this.prisma.produto.findUnique({
            where: {id}
        });
    }

    update(id: number, dto: CreateProdutoDto) {
        return this.prisma.produto.update({
            where: { id },
            data: {
                nome: dto.nome,
                descricao: dto.descricao,
                preco: dto.preco,
                estoque: dto.estoque,
                lojaId: dto.lojaId,
            },
            });
  }

    delete(id: number) {
        return this.prisma.produto.delete({
            where: { id },
        });
    }

}
