import { Test, TestingModule } from '@nestjs/testing';
import { AladhanService } from './aladhan.service';
import { HttpModule } from '@nestjs/axios';

describe('AladhanService', () => {
  let service: AladhanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [AladhanService],
    }).compile();

    service = module.get<AladhanService>(AladhanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
