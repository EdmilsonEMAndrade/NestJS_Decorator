import { JourneyInterface } from "src/interface/journey.interface";
import { Parameters } from "src/interface/parameters.interface";
import { Results } from "src/interface/results.interface";

export function JourneyDecorator<P extends Parameters, R extends Results>() {
    return function (constructor: new () => JourneyInterface<Parameters, Results>) {
        return class extends constructor {
            city: string;
            state: string;

            constructor() {
                super();
                if (!this.city || !this.state) {
                    throw new Error('The class must declare city and state');
                }
            }
        };
    };
}
