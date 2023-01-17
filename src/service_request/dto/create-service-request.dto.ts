import { IsNotEmpty, IsOptional } from "class-validator";
import { Column, CreateDateColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "../../user/entities/user.entity";

export class CreateServiceRequestDto {
  @IsNotEmpty()
  date: Date;
  @IsNotEmpty()
  address: string;
  @IsNotEmpty()
  phone: number;
  @IsNotEmpty()
  animalType: string;
  @IsNotEmpty()
  providerId: number;
  @IsNotEmpty()
  petOwnerId: number;
  @IsNotEmpty()
  serviceId: number;
}

