import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProdutoDto {
  @IsString()
  @IsNotEmpty()
  nome: string = '';

  @IsString()
  descricao: string = '';

  @IsNumber()
  preco: number = 0;

  @IsInt()
  estoque: number = 0;

  @IsInt()
  lojaId: number = 0;
}