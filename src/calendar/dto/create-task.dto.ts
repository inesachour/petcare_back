import { IsDate, IsNotEmpty } from "class-validator";
import { User } from "../../user/entities/user.entity";

export class CreateTaskDto {
  @IsNotEmpty()
  @IsDate()
  date: Date
  @IsNotEmpty()
  content: string
  user: User
}