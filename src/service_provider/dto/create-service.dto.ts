import { IsDate, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateServiceDto {
  @IsNotEmpty()
  category: string;
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  price: number;
  @IsNotEmpty()
  city: string;
  @IsNotEmpty()
  userId: number;
}
