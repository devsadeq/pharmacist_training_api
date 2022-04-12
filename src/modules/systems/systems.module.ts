import { Module } from '@nestjs/common';
import { SystemsService } from './systems.service';
import { SystemsController } from './systems.controller';

@Module({
  controllers: [SystemsController],
  providers: [SystemsService]
})
export class SystemsModule {}
