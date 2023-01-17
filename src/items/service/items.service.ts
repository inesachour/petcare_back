import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ItemEntity } from "../entities/item.entity";
import { Repository } from "typeorm";
import { CreateTaskDto } from "../../calendar/dto/create-task.dto";
import { ItemDto } from "../dto/item.dto";

@Injectable()
export class ItemsService {

  constructor(@InjectRepository(ItemEntity) private readonly taskRepository:Repository<ItemEntity>) {  }

  async findAll() {
    return await this.taskRepository.find()
  }

  async addItem(item:ItemDto){
    return await this.taskRepository.save(item)
  }
}