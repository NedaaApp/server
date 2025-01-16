import { Module } from '@nestjs/common';
import { PrayerTimesController } from '@/prayer-times/controllers/prayer-times.controller';
import { AladhanService } from '@/prayer-times/services/aladhan/aladhan.service';
import { ProviderService } from '@/prayer-times/services/provider/provider.service';
import { PrayerTimesService } from '@/prayer-times/services/prayer-times.service';

@Module({
  controllers: [PrayerTimesController],
  providers: [ProviderService, PrayerTimesService, AladhanService],
})
export class PrayerTimesModule {}
