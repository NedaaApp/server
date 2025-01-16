import { Test, TestingModule } from '@nestjs/testing';
import { PrayerTimesService } from './prayer-times.service';
import { ProviderRegistryService } from '@/prayer-times/services/provider/provider-registry.service';
import { ProviderService } from '@/prayer-times/services/provider/provider.service';

describe('PrayerTimesService', () => {
  let service: PrayerTimesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrayerTimesService,
        {
          provide: ProviderService,
          useValue: {
            getProviderById: jest.fn(),
            getProviders: jest.fn(),
          },
        },
        {
          provide: ProviderRegistryService,
          useValue: {
            getProviderService: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<PrayerTimesService>(PrayerTimesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
