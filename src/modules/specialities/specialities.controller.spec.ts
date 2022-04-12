import { Test, TestingModule } from '@nestjs/testing';
import { SpecialitiesController } from './specialities.controller';
import { SpecialitiesService } from './specialities.service';

describe('SpecialitiesController', () => {
  let controller: SpecialitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpecialitiesController],
      providers: [SpecialitiesService],
    }).compile();

    controller = module.get<SpecialitiesController>(SpecialitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
