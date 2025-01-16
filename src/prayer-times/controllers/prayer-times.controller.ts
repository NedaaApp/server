import { Controller, Get } from '@nestjs/common';

// Services
import { ProviderService } from '@/prayer-times/services/provider/provider.service';

// Interfaces
import { PrayerTimesProvider } from '@/prayer-times/interfaces/provider.interface';

@Controller({ path: 'prayer-times', version: '2' })
export class PrayerTimesController {
  constructor(private readonly providerService: ProviderService) {}

  @Get('/')
  getPrayerTimes(): string {
    return 'TODO';
  }

  @Get('providers')
  getProviders(): PrayerTimesProvider[] {
    return this.providerService.getProviders();
  }
}
