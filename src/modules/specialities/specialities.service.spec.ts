import { Test, TestingModule } from '@nestjs/testing';
import { SpecialitiesService } from './specialities.service';

describe('SpecialitiesService', () => {
  let service: SpecialitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpecialitiesService],
    }).compile();

    service = module.get<SpecialitiesService>(SpecialitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
