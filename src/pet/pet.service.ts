import { Injectable } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { Repository } from 'typeorm';
import { Pet } from './entities/pet.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PetService {
  constructor(@InjectRepository(Pet) private petRepository: Repository<Pet>) {}

  async addPet(createPetDto: CreatePetDto) {
    return await this.petRepository.save(createPetDto);
  }
}
