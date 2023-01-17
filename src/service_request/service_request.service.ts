import { Injectable } from '@nestjs/common';
import { CreatePetDto } from '../pet/dto/create-pet.dto';
import { User } from '../user/entities/user.entity';
import { CreateServiceRequestDto } from './dto/create-service-request.dto';
import { UserService } from '../user/user.service';
import { ServiceProviderService } from '../service_provider/service_provider.service';
import { Service } from '../service_provider/entities/service.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceRequest } from './entities/service-request.entity';

@Injectable()
export class ServiceRequestService {
  constructor(
    private serviceProviderService: ServiceProviderService,
    private userService: UserService,
    @InjectRepository(ServiceRequest)
    private serviceRequestRepository: Repository<ServiceRequest>,
  ) {}

  async addServiceRequest(createServiceRequestDto: CreateServiceRequestDto) {
    const provider: User = await this.userService.findOne(
      createServiceRequestDto.providerId,
    );
    const petOwner: User = await this.userService.findOne(
      createServiceRequestDto.petOwnerId,
    );
    const service: Service = await this.serviceProviderService.findOne(
      createServiceRequestDto.serviceId,
    );
    const relationObject = {
      provider: provider,
      petOwner: petOwner,
      service: service,
    };
    const merged = Object.assign(createServiceRequestDto, relationObject);
    return this.serviceRequestRepository.save(merged);
  }

  async getServicesRequestOfProvider(id: number) {
    return this.serviceRequestRepository.find({
      where: {
        provider: {
          id: id
        }
      },
      relations: ["provider"]
    });
  }
}
