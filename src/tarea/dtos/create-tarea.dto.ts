import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString, MaxLength } from 'class-validator';

export class CreateTareaDto {
  @ApiProperty()
  @IsString()
  @MaxLength(30)
  title: string;

  @ApiProperty()
  @IsString()
  @MaxLength(250, {
    message: 'El contenido no debe superar los 250 caracteres',
  })
  content: string;

  @ApiProperty()
  @IsBoolean()
  status: boolean;
}
