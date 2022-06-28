import { CoordinatesController } from './coordinates.controller';
import { Module } from '@nestjs/common';
import { CoordinatesService } from './coordinates.service';

@Module({
  controllers: [CoordinatesController],
  providers: [CoordinatesService],
})
export class CoordinatesModule {}
