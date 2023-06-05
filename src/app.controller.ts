import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getJourney(@Query('city') city: string, @Query('state') state: string) {
    if (!city || !state) {
      throw new BadRequestException('The city and state parameters are mandatory.');
    }
    return this.appService.getJourney(city, state);
  }
}
