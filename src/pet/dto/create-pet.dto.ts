import { IsDate, IsNotEmpty, IsNumber, IsOptional } from "class-validator";
import { Gender } from '../../user/enums/gender.enum';
import { Column } from 'typeorm';

export class CreatePetDto {
  @IsNotEmpty()
  type: string;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  gender: Gender;
  @IsNotEmpty()
  breed: string;
  @IsNotEmpty()
  @IsDate()
  birthDate: Date;
  @IsOptional()
  @IsNumber()
  weight: number;
}
