import { Module } from '@nestjs/common';
import { ServiceRequestController } from './service_request.controller';
import { ServiceRequestService } from './service_request.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceRequest } from './entities/service-request.entity';
import { UserModule } from '../user/user.module';
import { ServiceProviderModule } from '../service_provider/service_provider.module';
import { User } from "../user/entities/user.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([ServiceRequest, User]),
    UserModule,
    ServiceProviderModule,
  ],
  controllers: [ServiceRequestController],
  providers: [ServiceRequestService],
  exports: [ServiceRequestService],
})
export class ServiceRequestModule {}
