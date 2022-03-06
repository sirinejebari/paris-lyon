import {render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import {createStore} from "redux";
import React from "react";
import {RideResutls} from "./RideResutls";
import {trips} from "../../MockResults";

describe('RideResults', () => {
    it('Show NoRides Component when trips is an empry array', () => {
        render(
            <Provider store={createStore(() => {
                return {trips: []};
            })}>
                <RideResutls/>
            </Provider>);
        const noRidesFound = screen.getByText("No Rides found for your itenerary, try again later !");

        expect(noRidesFound).toBeInTheDocument()


    });

    it('Show Error Component when errorMEssage is defined', () => {
        render(
            <Provider store={createStore(() => {
                return {trips: undefined, errorMessage: "A technical error occurred"};
            })}>
                <RideResutls/>
            </Provider>);
        const errorText = screen.getByText("A technical error occurred");

        expect(errorText).toBeInTheDocument()
    });

    it('Show Loading Component when errorMEssage & trips are undefined', () => {
        render(
            <Provider store={createStore(() => {
                return {trips: undefined, errorMessage: undefined};
            })}>
                <RideResutls/>
            </Provider>);
        const loadingText = screen.getByText("Finding you the best trips...");

        expect(loadingText).toBeInTheDocument()
    });

    it('Show Available rides summary when rides are available', () => {
        render(
            <Provider store={createStore(() => {
                return {trips: trips, errorMessage: undefined, availableTrips: trips.length};
            })}>
                <RideResutls/>
            </Provider>);
        const carpoolCount = screen.getByTestId("ResultCount-text");
        expect(carpoolCount.textContent).toBe( `${trips.length} carpoolers available to have you onboard !`);
    });
});
