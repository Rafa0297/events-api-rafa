import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Conferencia de Tecnología' })
  title!: string;

  @IsString()
  @ApiProperty({
    example: 'Una conferencia sobre las últimas tendencias en tecnología.',
  })
  description!: string;

  @IsDateString() // Valida que el formato de fecha sea correcto (ISO8601)
  @ApiProperty({ example: '2024-12-31T23:59:59Z' })
  date!: string;

  @IsString()
  @ApiProperty({ example: 'Madrid, España' })
  location!: string;
}
