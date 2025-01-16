import { Test, TestingModule } from '@nestjs/testing';
import { PrayerTimesProxyService } from './prayer-times-proxy.service';

describe('PrayerTimesProxyService', () => {
  let service: PrayerTimesProxyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrayerTimesProxyService],
    }).compile();

    service = module.get<PrayerTimesProxyService>(PrayerTimesProxyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
