import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateProfileDto {
  @IsInt()
  usuarioId: number = 0;

  @IsOptional()
  @IsString()
  telefone?: string;

  @IsOptional()
  @IsString()
  endereco?: string;
}