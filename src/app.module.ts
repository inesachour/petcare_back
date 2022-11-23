import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Joi from 'joi';
import config from './config';
import { enviroments } from './enviroments';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    LoginModule,
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        JWT_SECRET: Joi.string().required(),
        JWT_REFRESH_SECRET: Joi.string().required(),
        ACCESS_TOKEN_EXPIRATION: Joi.string().required(),
        REFRESH_TOKEN_EXPIRATION: Joi.string().required(),
      }),
      validationOptions: {
        abortEarly: true, //when true, stops validation on the first error, otherwise returns all the errors found. Defaults to true.
      },
    }),
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        return {
          type: 'mysql',
          host: configService.mysql.host,
          port: configService.mysql.port,
          database: configService.mysql.name,
          username: configService.mysql.user,
          password: configService.mysql.password,
          synchronize: true,
          autoLoadEntities: true,
          keepConnectionAlive: true,
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
