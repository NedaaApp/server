import { Test, TestingModule } from '@nestjs/testing';

import { PrayerTimesController } from '@/prayer-times/controllers/prayer-times.controller';
import { ProviderService } from '@/prayer-times/services/provider/provider.service';
import { PrayerTimesProvider } from '@/prayer-times/interfaces/provider.interface';

describe('PrayerTimesController', () => {
  let controller: PrayerTimesController;
  let providerService: ProviderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrayerTimesController],
      providers: [
        {
          provide: ProviderService,
          useValue: {
            getProviders: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<PrayerTimesController>(PrayerTimesController);
    providerService = module.get<ProviderService>(ProviderService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getProviders', () => {
    it('should return an array of providers', () => {
      // Mock data
      const mockProviders: PrayerTimesProvider[] = [
        { id: 1, name: 'Aladhan', website: 'https://aladhan.com' },
      ];

      jest
        .spyOn(providerService, 'getProviders')
        .mockReturnValue(mockProviders);

      const result = controller.getProviders();

      // Assertions
      expect(result).toEqual(mockProviders);
      expect(providerService.getProviders).toHaveBeenCalled();
    });
  });
});
