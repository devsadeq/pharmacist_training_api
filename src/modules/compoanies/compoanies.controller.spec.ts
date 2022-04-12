import { Test, TestingModule } from '@nestjs/testing';
import { CompoaniesController } from './compoanies.controller';
import { CompoaniesService } from './compoanies.service';

describe('CompoaniesController', () => {
  let controller: CompoaniesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompoaniesController],
      providers: [CompoaniesService],
    }).compile();

    controller = module.get<CompoaniesController>(CompoaniesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
