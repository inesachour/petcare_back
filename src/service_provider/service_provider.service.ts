import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThanOrEqual, Repository } from 'typeorm';
import { Service } from './entities/service.entity';
import { User } from '../user/entities/user.entity';
import { CreateServiceDto } from './dto/create-service.dto';
import { UserService } from '../user/user.service';
import { SearchServiceDto } from './dto/search-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

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

  async updateService(id: number, updateServiceDto: UpdateServiceDto) {
    const service = await this.serviceRepository.preload({
      id,
      ...updateServiceDto,
    });
    if (!service) {
      throw new NotFoundException(`Service with id ${id} does not exist`);
    }
    return this.serviceRepository.save(service);
  }

  async findById(id: number) {
    return await this.serviceRepository.findOneOrFail({ where: { id: id } });
  }

  async getServices() {
    return await this.serviceRepository.find();
  }

  async searchServices(searchServiceDto: SearchServiceDto) {
    let services: Service[];

    if (searchServiceDto.maxPrice != null && searchServiceDto.maxPrice >= 0) {
      services = await this.serviceRepository.find({
        where: [{ price: LessThanOrEqual(searchServiceDto.maxPrice) }],
      });
    } else {
      services = await this.serviceRepository.find();
    }

    const categoryFiltered = [];
    services.map((s) => {
      if (
        searchServiceDto.categories.includes(s.category) &&
        (s.title.includes(searchServiceDto.text) ||
          s.description.includes(searchServiceDto.text))
      )
        categoryFiltered.push(s);
    });

    const filtered = [];
    categoryFiltered.map((s) => {
      if (s.title.toLowerCase().includes(searchServiceDto.text.toLowerCase())) {
        filtered.push(s);
      }
    });

    return filtered;
  }

  async getServicesByOwner(id: number) {
    const services = [];
    (await this.getServices()).forEach((element) => {
      if (element.user.id == id) services.push(element);
    });
    return services;
  }
}
