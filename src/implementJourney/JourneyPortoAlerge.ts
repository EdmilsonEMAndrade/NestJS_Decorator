import { JourneyDecorator } from "src/decorator/journey.decorator";
import { JourneyInterface } from "src/interface/journey.interface";
import { Parameters } from "src/interface/parameters.interface";
import { Results } from "src/interface/results.interface";

@JourneyDecorator(City.PORTO_ALEGRE, State.RS)
class JourneyPortoAlegre implements JourneyInterface<Parameters, Results>{
    city: City;
    state: State;
    run(parameters: Parameters): Results {
        throw new Error("Method not implemented.");
    }
};

export default new JourneyPortoAlegre();