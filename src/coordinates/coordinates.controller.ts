import { Controller, Get, Query, HttpException, Version } from '@nestjs/common';
import { CoordinatesService } from './coordinates.service';

@Controller('coordinates')
export class CoordinatesController {
  constructor(private readonly coordinatesService: CoordinatesService) {}

  @Get()
  @Version('1')
  async getCoordinates(@Query('address') address: string): Promise<any> {
    if (!address) {
      throw new HttpException('Address is required', 400);
    }

    return this.coordinatesService.getCoordinates(address);
  }
}
