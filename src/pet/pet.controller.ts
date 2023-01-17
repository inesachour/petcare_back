import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { PetService } from './pet.service';
import { CreatePetDto } from './dto/create-pet.dto';

@Controller('pet')
export class PetController {
  constructor(private petService: PetService) {}

  @Post()
  addPet(@Body() createdPetDto: CreatePetDto) {
    return this.petService.addPet(createdPetDto);
  }

  @Patch(':id')
  updatePet(@Param('id') id: number, @Body() createPetDto: CreatePetDto) {
    return this.petService.updatePet(id, createPetDto);
  }
}
