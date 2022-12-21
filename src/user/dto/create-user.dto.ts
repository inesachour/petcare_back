import { IsNotEmpty } from "class-validator";
import { IsDate, IsEmail, MinLength } from "class-validator/types/decorator/decorators";
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
    city: string;
    gender: Gender;
    @IsNotEmpty()
    @MinLength(6)
    password: string;
    @IsNotEmpty()
    @MinLength(6)
    @Match(CreateUserDto, (e) => e.password)
    confirmPassword: string;
}
