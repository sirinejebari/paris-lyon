import {AppActions, TripsState} from "./definition/state";

export const initialState: TripsState = {
    trips: undefined,
    availableTrips: 0,
    next_cursor: undefined,
    errorMessage: undefined
}

const reducer = (state = initialState, action: AppActions) => {
    switch (action.type) {
        case "LOAD_RIDES":
            return {
                ...state,
                trips: [...state.trips?? [], ...action.payload.trips],
                availableTrips: action.payload.availableTrips,
                next_cursor: action.payload.next_cursor
            }

        case "FETCH_FAILED":
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}

export default reducer;