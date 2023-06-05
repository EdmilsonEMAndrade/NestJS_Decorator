import { Parameters } from "./parameters.interface";
import { Results } from "./results.interface";

export interface JourneyInterface<P extends Parameters, R extends Results> {
    city: string;
    state: string;
    run(parameters: P): R;
}