import { Injectable } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { Repository } from 'typeorm';
import { Pet } from './entities/pet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.entity';
import { Gender } from '../user/enums/gender.enum';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(Pet) private petRepository: Repository<Pet>,
    private userService: UserService,
  ) {}

  async addPet(createPetDto: CreatePetDto) {
    const owner: User = await this.userService.findOne(createPetDto.ownerId);
    const ownerObject = { owner: owner };
    const merged = Object.assign(createPetDto, ownerObject);
    return await this.petRepository.save(merged);
  }
}
