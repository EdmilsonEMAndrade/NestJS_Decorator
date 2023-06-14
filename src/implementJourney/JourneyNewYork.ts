import { JourneyDecorator } from 'src/decorator/journey.decorator';
import { JourneyInterface } from 'src/interface/journey.interface';
import { Results } from 'src/interface/results.interface';
import { Parameters } from 'src/interface/parameters.interface';

class newYorkParams implements Parameters {
  population: number;
}

@JourneyDecorator(City.NEW_YORK, State.NY)
class JourneyNewYork implements JourneyInterface<newYorkParams, Results> {
  city: City;
  state: State;
  run(parameters: newYorkParams) {
    return {
      text: `City: ${this.city} State ${this.state}`,
    };
  }
}

export default new JourneyNewYork();