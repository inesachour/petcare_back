import { Module } from '@nestjs/common';
import { ServiceProviderService } from './service_provider.service';
import { ServiceProviderController } from './service_provider.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from './entities/service.entity';
import { UserModule } from "../user/user.module";

@Module({
  imports: [TypeOrmModule.forFeature([Service]), UserModule],
  providers: [ServiceProviderService],
  controllers: [ServiceProviderController],
  exports: [ServiceProviderService],
})
export class ServiceProviderModule {}
