import { JourneyDecorator } from 'src/decorator/journey.decorator';
import { JourneyInterface } from 'src/interface/journey.interface';
import { Parameters } from 'src/interface/parameters.interface';
import { Results } from 'src/interface/results.interface';

class dallasTexasParams implements Parameters {
}

@JourneyDecorator(City.DALLAS, State.TX)
class JourneyDallas implements JourneyInterface<dallasTexasParams, Results> {
  city: City;
  state: State;
  run(parameters: dallasTexasParams) {
    return {
      text: `City: ${this.city} State ${this.state}`,
    };
  }
}

export default new JourneyDallas();