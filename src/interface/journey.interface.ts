import { Parameters } from "./parameters.interface";
import { Results } from "./results.interface";

export interface JourneyInterface<P extends Parameters, R extends Results> {
    city: City;
    state: State;
    run(parameters: P): R;
}