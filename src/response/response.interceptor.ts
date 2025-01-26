import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { map, Observable } from 'rxjs';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  constructor(private reflector: Reflector) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse();
    const statusCode = response.statusCode;

    const message =
      this.reflector.get<string>('responseMessage', context.getHandler()) ||
      this.getDefaultMessage(statusCode);

    return next.handle().pipe(
      map((data) => ({
        status: statusCode,
        message,
        data: data || null,
      })),
    );
  }

  private getDefaultMessage(statusCode: number): string {
    const messages: { [key: number]: string } = {
      200: 'OK',
      201: 'Created',
      202: 'Accepted',
      204: 'No Content',
      400: 'Bad Request',
      401: 'Unauthorized',
      404: 'Not Found',
      500: 'Internal Server Error',
    };
    return messages[statusCode] || 'Unknown Status';
  }
}
