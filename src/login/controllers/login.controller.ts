import {
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import JwtRefreshGuard from '../guards/jwt-refresh.guard';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { PayloadToken } from '../models/token.model';
import { LoginService } from '../services/login.service';

type AuthorizedRequest = Express.Request & {
  headers: { authorization: string };
  user: PayloadToken;
};

@Controller('auth')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @UseGuards(LocalAuthGuard)
  @HttpCode(200)
  @Post('login')
  login(@Request() req: { user: PayloadToken }) {
    const user = req.user;
    return this.loginService.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('logout')
  async logOut(@Request() req: { user: PayloadToken }) {
    await this.loginService.logout(req.user);
  }

  @UseGuards(JwtRefreshGuard)
  @Get('refresh')
  refresh(@Req() req: AuthorizedRequest) {
    return this.loginService.createAccessTokenFromRefreshToken(req.user);
  }
}
