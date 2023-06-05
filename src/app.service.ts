import { Inject, Injectable } from '@nestjs/common';
import { JourneyInterface } from './interface/journey.interface';
import { JourneyDecorator } from './decorator/journey.decorator';

@Injectable()
export class AppService {

  constructor(@Inject('JourneyService') private readonly journeyServices: JourneyInterface<any, any>[]) {}
  
  getJourney(city: string, state: string): string {
    return this.findDecoratorJourneyClass(city.toLocaleUpperCase(), state.toLocaleUpperCase(), {});
  }

  private findDecoratorJourneyClass(city: string, state: string, parameters: any): any {
    const journeyService = this.journeyServices.find(service =>
      service.city === city && service.state === state
    );
    if (journeyService) {
      return journeyService.run(parameters);
    } else {
      throw new Error(`No journey found for city: ${city} and state: ${state}.`);
    }
  }
}
