import { Request, Response, NextFunction } from 'express';
import {
  Injectable,
  NestMiddleware,
  LoggerService,
  Inject,
} from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger?: LoggerService,
  ) {}
  use(req: Request, res: Response, next: NextFunction) {
    const startAt = process.hrtime();
    const { ip, method, originalUrl } = req;
    const userAgent = req.get('user-agent') || '';
    res.on('finish', () => {
      const elapsed = process.hrtime(startAt);
      const elapsedMs = elapsed[0] * 1e3 + elapsed[1] * 1e-6;
      const { statusCode } = res;
      const contentLength = res.get('content-length');
      this.logger.log(
        `${method} ${originalUrl} ${statusCode} ${contentLength} - ${elapsedMs.toFixed(
          3,
        )}ms - ${userAgent} - ${ip}`,
      );
    });
    next();
  }
}
