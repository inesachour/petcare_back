import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThanOrEqual, Like, Repository } from 'typeorm';
import { Service } from './entities/service.entity';
import { CreatePetDto } from '../pet/dto/create-pet.dto';
import { User } from '../user/entities/user.entity';
import { CreateServiceDto } from './dto/create-service.dto';
import { UserService } from '../user/user.service';
import { SearchServiceDto } from './dto/search-service.dto';

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

  async getServices() {
    return await this.serviceRepository.find();
  }

  async searchServices(searchServiceDto: SearchServiceDto) {

    //TODO CASE WHERE FIELDS EMPTY
    const services = await this.serviceRepository.find({
      where: [
        { price: LessThanOrEqual(searchServiceDto.maxPrice) },
      ]
    });
    //console.log(services);
    const filtered = [];
    services.map((s) => {
     console.log(searchServiceDto.text);
      if(searchServiceDto.categories.includes(s.category) && (s.title.includes(searchServiceDto.text) || (s.description.includes(searchServiceDto.text))))
        filtered.push(s)
    });
    return filtered
  }
}
