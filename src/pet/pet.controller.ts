import { Pet } from './entities/pet.entity';
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PetService } from './pet.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';

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

  @Patch(':id')
  updatePet(@Param('id') id: number, @Body() updatePetDto: UpdatePetDto) {
    return this.petService.updatePet(id, updatePetDto);
  }

  @Get('one/:id')
  findById(@Param('id') id: number) {
    return this.petService.findById(id);
  }
}
