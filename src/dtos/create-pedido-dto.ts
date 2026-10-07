import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePedidoDto {
  @IsInt()
  usuarioId: number = 0;

  @IsNumber()
  valorTotal: number = 0;

  @IsString()
  @IsNotEmpty()
  status: string = '';
}