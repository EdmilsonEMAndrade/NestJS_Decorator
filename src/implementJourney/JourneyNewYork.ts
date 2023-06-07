import { JourneyDecorator } from 'src/decorator/journey.decorator';
import { JourneyInterface } from 'src/interface/journey.interface';
import { Results } from 'src/interface/results.interface';

interface newYorkParams {
  population: number;
}

@JourneyDecorator("New York", "New York")
class JourneyNewYork implements JourneyInterface<newYorkParams, Results> {
  city: string;
  state: string;
  run(parameters: newYorkParams) {
    return {
      text: `City: ${this.city} State ${this.state}`,
    };
  }
}

export default new JourneyNewYork();