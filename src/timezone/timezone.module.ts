import { TimezoneService } from './timezone.service';
import { Module } from '@nestjs/common';
import { TimezoneController } from './timezone.controller';

@Module({
  controllers: [TimezoneController],
  providers: [TimezoneService],
})
export class TimezoneModule {}
