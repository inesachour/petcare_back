import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePetDto } from '../pet/dto/create-pet.dto';
import { CreateServiceRequestDto } from './dto/create-service-request.dto';
import { ServiceRequestService } from './service_request.service';
import * as Path from 'path';

@Controller('service_request')
export class ServiceRequestController {
  constructor(private serviceRequestService: ServiceRequestService) {}

  @Post()
  addServiceRequest(@Body() createServiceRequestDto: CreateServiceRequestDto) {
    return this.serviceRequestService.addServiceRequest(
      createServiceRequestDto,
    );
  }

  @Get('/provider/:id')
  getServicesRequestOfProvider(@Param('id') id: number) {
    return this.serviceRequestService.getServicesRequestOfProvider(id);
  }
}
