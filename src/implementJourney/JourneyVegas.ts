import { JourneyDecorator } from "src/decorator/journey.decorator";
import { JourneyInterface } from "src/interface/journey.interface";
import { Results } from "src/interface/results.interface";

interface vegasParams {
}
@JourneyDecorator()
export class JourneyVegas implements JourneyInterface<vegasParams, Results>{
    city = "LAS VEGAS";
    state = "NEVADA";
    run(parameters: vegasParams) {
        return {
            text: `City: ${this.city} State ${this.state}`,
        };
    }
}

export default new JourneyVegas();
