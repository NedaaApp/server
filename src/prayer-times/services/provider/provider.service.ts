import { Injectable } from '@nestjs/common';

// Interfaces
import { PrayerTimesProvider } from '@/prayer-times/interfaces/provider.interface';

@Injectable()
export class ProviderService {
  private readonly providers: PrayerTimesProvider[] = [
    { id: 1, name: 'Aladhan', website: 'https://aladhan.com' },
  ];

  getProviders(): PrayerTimesProvider[] {
    return this.providers;
  }

  getProviderById(providerId: number | undefined): PrayerTimesProvider | null {
    return (
      this.getProviders().find(
        (p: PrayerTimesProvider) => p.id === providerId,
      ) || null
    );
  }
}
