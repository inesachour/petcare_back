import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TiemstampEntity } from "../../generics/tiemstamp.entity";
import { IsNumber, IsString } from "class-validator";

@Entity()
export class ItemEntity extends TiemstampEntity  {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  @IsString()
  base64: string;
  @Column()
  @IsString()
  name: string;
  @Column()
  @IsNumber()
  price: number
}