import {Trip} from "../../definitions/Trip";

export type TripsState = {
    trips: Trip[] | undefined;
    availableTrips: number;
    next_cursor?: string;
    errorMessage?: string;
}

export type LoadRidesAction = { type: "LOAD_RIDES", payload: { trips: Trip[], availableTrips: number, next_cursor?: string } }
export type FetchFailedAction = { type: "FETCH_FAILED", payload: string }

export type AppActions = FetchFailedAction | LoadRidesAction