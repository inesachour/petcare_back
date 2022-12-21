import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsEmail()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;
}

export class PostLoginResponse {
  readonly accessToken: string;

  readonly refreshToken: string;
}

export class GetRefreshResponse {
  readonly accessToken: string;
}
