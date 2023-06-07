import { Inject, Injectable } from '@nestjs/common';
import { JourneyInterface } from './interface/journey.interface';
import { JourneyDecorator } from './decorator/journey.decorator';

@Injectable()
export class AppService {

  constructor(@Inject('JourneyService') private readonly journeyServices: JourneyInterface<any, any>[]) {}
  
  getJourney(city: string, state: string): string {
    return this.findDecoratorJourneyClass(city, state, {});
  }

  private findDecoratorJourneyClass(city: string, state: string, parameters: any): any {
    const journeyService = this.journeyServices.find(service =>
      service.city.toLocaleUpperCase() === city.toLocaleUpperCase() && service.state.toLocaleUpperCase() === state.toLocaleUpperCase()
    );
    if (journeyService) {
      return journeyService.run(parameters);
    } else {
      throw new Error(`No journey found for city: ${city} and state: ${state}.`);
    }
  }
}
