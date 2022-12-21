import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './entities/user.entity';
import { JwtStrategy } from 'src/login/strategies/jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  exports: [UserService],
  controllers: [UserController],
  providers: [UserService, JwtStrategy],
})
export class UserModule {
}
