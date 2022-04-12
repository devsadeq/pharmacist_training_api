import { Test, TestingModule } from '@nestjs/testing';
import { RxsController } from './rxs.controller';
import { RxsService } from './rxs.service';

describe('RxsController', () => {
  let controller: RxsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RxsController],
      providers: [RxsService],
    }).compile();

    controller = module.get<RxsController>(RxsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
