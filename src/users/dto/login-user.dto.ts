import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginUserDto {
  @IsEmail()
  @ApiProperty({ example: 'john.doe@example.com' })
  email!: string;

  @IsString()
  @ApiProperty({ example: 'password123' })
  @MinLength(6, { message: 'El password debe tener al menos 6 caracteres' })
  password!: string;
}
