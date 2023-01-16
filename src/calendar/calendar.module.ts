import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { TaskEntity } from "./entities/task.entity";
import { UserService } from "../user/user.service";
import { UserController } from "../user/user.controller";
import { JwtStrategy } from "../login/strategies/jwt.strategy";
import { TaskService } from "./services/task.service";
import { TaskController } from "./controllers/task.controller";

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity])],
  exports: [TaskService],
  controllers: [TaskController],
  providers: [TaskService],
})
export class CalendarModule {}
