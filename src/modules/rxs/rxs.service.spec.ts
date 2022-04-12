import { Test, TestingModule } from '@nestjs/testing';
import { RxsService } from './rxs.service';

describe('RxsService', () => {
  let service: RxsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RxsService],
    }).compile();

    service = module.get<RxsService>(RxsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
