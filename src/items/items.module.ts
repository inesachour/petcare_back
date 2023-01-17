import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { TaskEntity } from "../calendar/entities/task.entity";
import { TaskService } from "../calendar/services/task.service";
import { TaskController } from "../calendar/controllers/task.controller";
import { ItemEntity } from "./entities/item.entity";
import { ItemsService } from "./service/items.service";
import { ItemsController } from "./controllers/items.controller";

@Module({
  imports: [TypeOrmModule.forFeature([ItemEntity])],
  exports: [ItemsService],
  controllers: [ItemsController],
  providers: [ItemsService],})
export class ItemsModule {}
