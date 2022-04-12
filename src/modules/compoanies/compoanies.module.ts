import { Module } from '@nestjs/common';
import { CompoaniesService } from './compoanies.service';
import { CompoaniesController } from './compoanies.controller';

@Module({
  controllers: [CompoaniesController],
  providers: [CompoaniesService]
})
export class CompoaniesModule {}
