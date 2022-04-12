import { Test, TestingModule } from '@nestjs/testing';
import { CompoaniesService } from './compoanies.service';

describe('CompoaniesService', () => {
  let service: CompoaniesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompoaniesService],
    }).compile();

    service = module.get<CompoaniesService>(CompoaniesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
