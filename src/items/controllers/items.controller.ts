import { Body, Controller, Get, Post } from "@nestjs/common";
import { ItemsService } from "../service/items.service";
import { ItemDto } from "../dto/item.dto";

@Controller('item')
export class ItemsController {
  constructor(private readonly taskService:ItemsService) {}

  @Get()
  find() {
    return this.taskService.findAll();
  }

  @Post()
  create(@Body() itemDto:ItemDto){
    return this.taskService.addItem(itemDto);
  }
}
