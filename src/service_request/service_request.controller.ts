import { Body, Controller, Post } from '@nestjs/common';
import { CreatePetDto } from '../pet/dto/create-pet.dto';
import { CreateServiceRequestDto } from './dto/create-service-request.dto';
import { ServiceRequestService } from './service_request.service';

@Controller('service_request')
export class ServiceRequestController {
  constructor(private serviceRequestService: ServiceRequestService) {}

  @Post()
  addServiceRequest(@Body() createServiceRequestDto: CreateServiceRequestDto) {
    return this.serviceRequestService.addServiceRequest(
      createServiceRequestDto,
    );
  }
}
