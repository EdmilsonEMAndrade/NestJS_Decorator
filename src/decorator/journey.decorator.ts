import { JourneyInterface } from "src/interface/journey.interface";
import { Parameters } from "src/interface/parameters.interface";
import { Results } from "src/interface/results.interface";

export function JourneyDecorator(city: string, state: string) {
    return function (constructor: new () => JourneyInterface<Parameters, Results>) {
        return class extends constructor {
            constructor() {
                super();
                this.city = city;
                this.state = state;
            }
        };
    };
}
