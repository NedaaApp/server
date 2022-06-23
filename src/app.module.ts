import { APP_INTERCEPTOR } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { RateLimiterModule, RateLimiterInterceptor } from 'nestjs-fastify-rate-limiter';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [RateLimiterModule.register({
    points: 100,
    duration: 60,
    errorMessage: 'Too many requests',
    keyPrefix: 'rate-limiter',
})],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_INTERCEPTOR,
    useClass: RateLimiterInterceptor,
  }],
})
export class AppModule {}
