import { JourneyDecorator } from 'src/decorator/journey.decorator';
import { JourneyInterface } from 'src/interface/journey.interface';
import { Results } from 'src/interface/results.interface';

interface newYorkParams {
  population: number;
}

@JourneyDecorator()
class JourneyNewYork implements JourneyInterface<newYorkParams, Results> {
  city = 'NEW YORK';
  state = 'NY';
  run(parameters: newYorkParams) {
    return {
      text: `City: ${this.city} State ${this.state}`,
    };
  }
}

export default new JourneyNewYork();