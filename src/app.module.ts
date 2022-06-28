import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { ConfigModule } from '@nestjs/config';
import { CalendarService } from './calendar/calendar.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalendarController } from './calendar/calendar.controller';
import { TimezoneController } from './timezone/timezone.controller';
import { TimezoneService } from './timezone/timezone.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 25,
    }),
  ],
  controllers: [AppController, CalendarController, TimezoneController],
  providers: [
    AppService,
    CalendarService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    TimezoneService,
  ],
})
export class AppModule {}
