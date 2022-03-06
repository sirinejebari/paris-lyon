import {fireEvent, render} from '@testing-library/react';
import {Table} from "./Table";
import {Provider} from "react-redux";
import {createStore} from "redux";
import React from "react";
import {trips} from "../../../MockResults";
import {TripsApi} from "../../../api/TripsApi";

describe('Table Component', () => {
    it('Should open ride link in new tab', () => {
        window.open = jest.fn()
        const {getByText, debug} = render(
            <Provider store={createStore(() => {
                return {trips: trips, next_cursor: undefined};
            })}>
                <Table/>
            </Provider>);
        const ride = getByText("PEUGEOT 508")
        expect(ride).toBeInTheDocument()

        ride!.click();
        expect(window.open).toHaveBeenCalledWith("https://www.blablacar.co.uk/trip?source=CARPOOLING&id=2412717412-massy-lyon", "_blank")
    });
    it('Should load more trips on scroll', () => {
        window.scrollTo = jest.fn();
        const apiSpy = jest.spyOn(TripsApi, 'getTrips')
        render(
            <Provider store={createStore(() => {
                return {trips: trips, next_cursor: "lala"};
            })}>
                <Table/>
            </Provider>);
        fireEvent.scroll(window, {
            target: {
                scrollY: 300
            }
        });
        expect(apiSpy).toHaveBeenCalledWith("lala")
    })
    it('Should not load more trips on scroll when next cursor undefined', () => {
        window.scrollTo = jest.fn();
        const apiSpy = jest.spyOn(TripsApi, 'getTrips')
        render(
            <Provider store={createStore(() => {
                return {trips: trips, next_cursor: undefined};
            })}>
                <Table/>
            </Provider>);
        fireEvent.scroll(window, {
            target: {
                scrollY: 300
            }
        });
        expect(apiSpy).toHaveBeenCalledTimes(0)
    })
});
