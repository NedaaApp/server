import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PrayerTimesController } from '@/prayer-times/controllers/prayer-times.controller';
import { AladhanService } from '@/prayer-times/services/aladhan/aladhan.service';
import { ProviderService } from '@/prayer-times/services/provider/provider.service';
import { PrayerTimesService } from '@/prayer-times/services/prayer-times.service';
import { ProviderRegistryService } from '@/prayer-times/services/provider/provider-registry.service';

@Module({
  imports: [HttpModule],
  controllers: [PrayerTimesController],
  providers: [
    ProviderService,
    PrayerTimesService,
    AladhanService,
    ProviderRegistryService,
  ],
})
export class PrayerTimesModule {}
