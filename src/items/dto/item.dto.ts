import { IsNotEmpty } from "class-validator";

export class ItemDto {
  @IsNotEmpty()
  name: string
  @IsNotEmpty()
  base64: string
  @IsNotEmpty()
  price: number

}