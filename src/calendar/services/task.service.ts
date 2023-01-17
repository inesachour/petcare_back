import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TaskEntity } from "../entities/task.entity";
import { Repository } from "typeorm";
import { CreateTaskDto } from "../dto/create-task.dto";
import { UpdateTaskDto } from "../dto/update-task.dto";
import { User } from "../../user/entities/user.entity";

@Injectable()
export class TaskService {

  constructor(@InjectRepository(TaskEntity) private readonly taskRepository:Repository<TaskEntity>) {  }

  async find(user:number) {
    return await this.taskRepository.find()
  }

  async addTask(task:CreateTaskDto){
    return await this.taskRepository.save(task)
  }

  async updateTask(id:number, task:UpdateTaskDto){
    return await this.taskRepository.update({id:id},task)
  }

  async deleteTask(id:number){
    return await this.taskRepository.delete(id)
  }

}