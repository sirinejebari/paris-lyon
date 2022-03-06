import {Utils} from "./Utils";
import {Vehicle} from "../../definitions/Trip";

describe("Utils", () => {
    describe("convertSecondsToDuration", () => {
        it("should return % when duration is negative value", () => {
            //given
            let duration = -500;

            //when
            let durationFormatted = Utils.convertSecondsToDuration(duration)

            //then
            expect(durationFormatted).toEqual("%")
        })
        it("should return 1 hour(s) when duration 3600 s", () => {
            //given
            let duration = 3600;

            //when
            let durationFormatted = Utils.convertSecondsToDuration(duration)

            //then
            expect(durationFormatted).toEqual("1 hour(s)")
        })
        it("should return 45 minutes when duration 2700 s", () => {
            //given
            let duration = 2700;

            //when
            let durationFormatted = Utils.convertSecondsToDuration(duration)

            //then
            expect(durationFormatted).toEqual("45 minutes")
        })
        it("should return hours and minutes when duration 19200 s", () => {
            //given
            let duration = 19200;

            //when
            let durationFormatted = Utils.convertSecondsToDuration(duration)

            //then
            expect(durationFormatted).toEqual("5h 20mins")
        })
        it("should return 0 minutes when value < 60 seconds ", () => {
            //given
            let duration = 55;

            //when
            let durationFormatted = Utils.convertSecondsToDuration(duration)

            //then
            expect(durationFormatted).toEqual("0 minutes")
        })
        it("shouldn't return remaining seconds ", () => {
            //given
            let duration = 1155;

            //when
            let durationFormatted = Utils.convertSecondsToDuration(duration)

            //then
            expect(durationFormatted).toEqual("19 minutes")
        })
    })

    describe("computeVehicle", () => {
        it("should return unknow when vehicule undefined", () => {
            //when
            let formattedVehicle = Utils.computeVehicle(undefined)

            //then
            expect(formattedVehicle).toEqual("unknown")
        });

        it("should return RENAULT CLIO IV when vehicule is well defined", () => {
            //given
            const vehicle: Vehicle = {make: "RENAULT", model:"CLIO IV"}

            //when
            let formattedVehicle = Utils.computeVehicle(vehicle)

            //then
            expect(formattedVehicle).toEqual("RENAULT CLIO IV")
        });
    });
})