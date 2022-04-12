import { Module } from '@nestjs/common';
import { RxsService } from './rxs.service';
import { RxsController } from './rxs.controller';

@Module({
  controllers: [RxsController],
  providers: [RxsService]
})
export class RxsModule {}
