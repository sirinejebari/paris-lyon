import {Vehicle} from "../../definitions/Trip";

export class Utils {
    static convertSecondsToDuration = (duration: number): string => {
        if (duration < 0) return "%"
        if (duration >= 3600) {
            if (Math.floor((duration % 3600)) === 0) {
                return `${Math.floor(duration / 3600)} hour(s)`

            }
            return `${Math.floor(duration / 3600)}h ${Math.floor((duration % 3600) / 60)}mins`
        } else {
            return `${Math.floor(duration  / 60)} minutes`
        }

    }

    static computeVehicle = (vehicle?: Vehicle) => {
        if (vehicle) return `${vehicle.make}\xa0${vehicle?.model}`
        else return "unknown"
    }
}