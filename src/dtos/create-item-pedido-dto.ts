import { IsInt, IsNumber } from 'class-validator';

export class CreateItemPedidoDto {
  @IsInt()
  pedidoId: number = 0;

  @IsInt()
  produtoId: number = 0;

  @IsInt()
  quantidade: number = 0;

  @IsNumber()
  precoUnitario: number = 0;
}