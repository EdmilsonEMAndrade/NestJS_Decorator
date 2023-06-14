import { JourneyDecorator } from "src/decorator/journey.decorator";
import { JourneyInterface } from "src/interface/journey.interface";
import { Results } from "src/interface/results.interface";
import { Parameters } from 'src/interface/parameters.interface';

class vegasParams implements Parameters {
}
@JourneyDecorator(City.LAS_VEGAS, State.NV)
export class JourneyVegas implements JourneyInterface<vegasParams, Results>{
    city: City;
    state: State;
    run(parameters: vegasParams) {
        return {
            text: `City: ${this.city} State ${this.state}`,
        };
    }
}

export default new JourneyVegas();
