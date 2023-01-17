import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ServiceProviderService } from './service_provider.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { SearchServiceDto } from './dto/search-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Controller('service')
export class ServiceProviderController {
  constructor(private serviceProviderService: ServiceProviderService) {}

  @Post()
  addService(@Body() createServiceDto: CreateServiceDto) {
    return this.serviceProviderService.addService(createServiceDto);
  }

  @Get()
  getServices() {
    return this.serviceProviderService.getServices();
  }

  @Post('/search')
  searchServices(@Body() searchServiceDto: SearchServiceDto) {
    return this.serviceProviderService.searchServices(searchServiceDto);
  }

  @Patch('/:id')
  updateService(
    @Param('id') id: number,
    @Body() updateServiceDto: UpdateServiceDto,
  ) {
    return this.serviceProviderService.updateService(id, updateServiceDto);
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.serviceProviderService.findById(id);
  }

  @Get('/find/:idUser')
  async getServicesByOwner(@Param('idUser') idUser: number) {
    let services = [];
    services = await this.serviceProviderService.getServicesByOwner(idUser);
    return services;
  }
}
