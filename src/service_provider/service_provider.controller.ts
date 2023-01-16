import { Body, Controller, Post } from '@nestjs/common';
import { CreatePetDto } from '../pet/dto/create-pet.dto';
import { ServiceProviderService } from './service_provider.service';
import { CreateServiceDto } from './dto/create-service.dto';

@Controller('service')
export class ServiceProviderController {
  constructor(private serviceProviderService: ServiceProviderService) {}

  @Post()
  addPet(@Body() createServiceDto: CreateServiceDto) {
    return this.serviceProviderService.addService(createServiceDto);
  }
}
