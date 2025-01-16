import { Module } from '@nestjs/common';
import { PrayerTimesController } from './controllers/prayer-times.controller';
import { AladhanService } from './services/aladhan/aladhan.service';
import { ProviderService } from './services/provider/provider.service';
import { PrayerTimesProxyService } from './services/prayer-times-proxy/prayer-times-proxy.service';

@Module({
  controllers: [PrayerTimesController],
  providers: [ProviderService, PrayerTimesProxyService, AladhanService],
})
export class PrayerTimesModule {}
