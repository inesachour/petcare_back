import { IsNotEmpty,IsDate, IsEmail, MinLength  } from "class-validator";
import { Match } from "src/generics/match.decorator";
import { Gender } from "../enums/gender.enum";

export class CreateUserDto {
    @IsNotEmpty()
    firstName: string;
    @IsNotEmpty()
    lastName: string;
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    @IsDate()
    birthDate: Date;
    @IsNotEmpty()
    city: string;
    @IsNotEmpty()
    gender: Gender;
    @IsNotEmpty()
    @MinLength(6)
    password: string;
    @IsNotEmpty()
    @MinLength(6)
    @Match(CreateUserDto, (e) => e.password)
    confirmPassword: string;
}
