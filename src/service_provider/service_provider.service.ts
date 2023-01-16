import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from './entities/service.entity';
import { CreatePetDto } from '../pet/dto/create-pet.dto';
import { User } from '../user/entities/user.entity';
import { CreateServiceDto } from './dto/create-service.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class ServiceProviderService {
  constructor(
    @InjectRepository(Service) private serviceRepository: Repository<Service>,
    private userService: UserService,
  ) {}

  async addService(createServiceDto: CreateServiceDto) {
    const user: User = await this.userService.findOne(createServiceDto.userId);
    const ownerObject = { user: user };
    const merged = Object.assign(createServiceDto, ownerObject);
    return await this.serviceRepository.save(merged);
  }
}
