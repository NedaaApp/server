import { Controller, Get } from '@nestjs/common';
import {
  HealthCheckService,
  HttpHealthIndicator,
  HealthCheck,
} from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(
    private readonly health: HealthCheckService,
    private http: HttpHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    const today = new Date();
    const date = today.toISOString().split('T')[0].replace(/-/g, '-');

    return this.health.check([
      () =>
        Promise.resolve({
          api: {
            status: 'up',
          },
        }),
      () =>
        this.http.pingCheck(
          'aladhan-api',
          `https://api.aladhan.com/v1/timingsByCity/${date}?city=Mecca&country=SA&state=Makkah`,
        ),
    ]);
  }
}
