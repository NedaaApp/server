import { Test, TestingModule } from '@nestjs/testing';
import { CalendarController } from './calendar.controller';
import { CalendarService } from './calendar.service';

describe('AppController', () => {
  let calendarController: CalendarController;

  beforeEach(async () => {
    const moudle: TestingModule = await Test.createTestingModule({
      controllers: [CalendarController],
      providers: [CalendarService],
    }).compile();

    calendarController = moudle.get<CalendarController>(CalendarController);
  });

  describe('calendar Controller', () => {
    it('should be defined', () => {
      expect(calendarController).toBeDefined();
    });
  });

  describe('get calendar', () => {
    it('should return calendar timings', async () => {
      const payload = {
        latitude: -23.5489,
        longitude: -46.6388,
        iso8601: true,
        annual: true,
      };
      const calendar = await calendarController.getCalendar(payload);
      expect(calendar.code).toBe(200);
      expect(typeof calendar).toBe('object');
    });
  });
});
