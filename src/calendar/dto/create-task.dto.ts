import { IsDate, IsNotEmpty, Length } from "class-validator";
import { User } from "../../user/entities/user.entity";

export class CreateTaskDto {
  @IsNotEmpty()
  @IsDate()
  date: Date
  @IsNotEmpty()
  content: string
  @IsNotEmpty()
  user: User
  @IsNotEmpty()
  title: string
  @IsNotEmpty()
  @Length(7,7)
  color: string
  @IsNotEmpty()
  time: Date

}