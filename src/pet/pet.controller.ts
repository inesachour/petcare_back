import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PetService } from './pet.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { Pet } from './entities/pet.entity';

@Controller('pet')
export class PetController {
  constructor(private petService: PetService) {}

  @Get(':id')
  async findByOwnerId(@Param('id') id: number): Promise<Pet[]> {
    return await this.petService.findByOwnerId(id);
  }

  @Post()
  addPet(@Body() createdPetDto: CreatePetDto) {
    return this.petService.addPet(createdPetDto);
  }



}
