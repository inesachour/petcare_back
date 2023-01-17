import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class SearchServiceDto {
  @IsOptional()
  @IsString()
  text: string;
  @IsOptional()
  categories: string[];
  @IsOptional()
  @IsNumber()
  maxPrice: number;
}