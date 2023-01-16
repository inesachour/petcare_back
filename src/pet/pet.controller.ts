import { Body, Controller, Post } from '@nestjs/common';
import { PetService } from './pet.service';
import { CreatePetDto } from './dto/create-pet.dto';

@Controller('pet')
export class PetController {
  constructor(private petService: PetService) {}

  @Post()
  addPet(@Body() createdPetDto: CreatePetDto) {
    return this.petService.addPet(createdPetDto);
  }
}
