export type Trip = {
    link: string,
    waypoints: Waypoint[],
    price: {
        amount: string;
        currency: string;
    },
    vehicle?: Vehicle,
    distance_in_meters: number,
    duration_in_seconds: number
}

export type Waypoint = {
    date_time: string;
    place: {
        city: string;
        address: string;
        latitude: number;
        longitude: number;
        country_code: string;
    }
}

export type Vehicle = {
    make: string;
    model: string;
}