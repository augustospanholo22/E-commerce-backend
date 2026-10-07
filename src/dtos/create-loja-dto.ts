import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateLojaDto {
  @IsString()
  @IsNotEmpty()
  nome: string = '';

  @IsString()
  descricao: string = '';

  @IsInt()
  usuarioId: number = 0;
}