import { IsBoolean, IsString, MaxLength } from 'class-validator';

export class CreateTareaDto {
  @IsString()
  @MaxLength(30)
  title: string;

  @IsString()
  @MaxLength(250, {
    message: 'El contenido no debe superar los 250 caracteres',
  })
  content: string;

  @IsBoolean()
  status: boolean;
}
