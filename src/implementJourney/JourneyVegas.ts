import { JourneyDecorator } from "src/decorator/journey.decorator";
import { JourneyInterface } from "src/interface/journey.interface";
import { Results } from "src/interface/results.interface";

interface vegasParams {
}
@JourneyDecorator("Las Vegas", "Nevada")
export class JourneyVegas implements JourneyInterface<vegasParams, Results>{
    city: string;
    state: string;
    run(parameters: vegasParams) {
        return {
            text: `City: ${this.city} State ${this.state}`,
        };
    }
}

export default new JourneyVegas();
