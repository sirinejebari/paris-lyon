import {FetchFailedAction, LoadRidesAction} from "./definition/state";
import {Trip} from "../definitions/Trip";

export const loadRides = (trips: Trip[], availableTrips: number, next_cursor?: string): LoadRidesAction => ({
    type: 'LOAD_RIDES',
    payload: {
        trips: trips,
        availableTrips: availableTrips,
        next_cursor: next_cursor
    },
});

export const fetchFailed = (message: string): FetchFailedAction => ({
    type: 'FETCH_FAILED',
    payload: message,
});
