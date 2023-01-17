import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PetService } from './pet.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';

@Controller('pet')
export class PetController {
  constructor(private petService: PetService) {}

  @Post()
  addPet(@Body() createdPetDto: CreatePetDto) {
    return this.petService.addPet(createdPetDto);
  }

  @Patch(':id')
  updatePet(@Param('id') id: number, @Body() updatePetDto: UpdatePetDto) {
    return this.petService.updatePet(id, updatePetDto);
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.petService.findById(id);
  }
}
