import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Role } from '../../login/models/roles.model';

export class CreateUserDto {
  @IsString()
  @IsEmail()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  readonly firstName: string;

  @IsString()
  @IsNotEmpty()
  readonly lastName: string;
}

export class CreateAdminDto extends CreateUserDto {
  @IsEnum(Role)
  readonly role: Role;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}

export class DefaultColumnsResponse extends CreateUserDto {
  readonly id: number;

  readonly createdAt: Date;

  readonly updatedAt: Date;

  readonly role: Role;
}
