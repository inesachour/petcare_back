import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { TaskEntity } from "./entities/task.entity";
import { TaskService } from "./services/task.service";
import { TaskController } from "./controllers/task.controller";

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity])],
  exports: [TaskService],
  controllers: [TaskController],
  providers: [TaskService],
})
export class CalendarModule {}
