
export class TripsApi {
    static getTrips = (nextCursor?: string) => {
        let finalUrl = new URL("https://public-api.blablacar.com/api/v3/trips?key=YzbiA8L6DcqxTvSna1lOFQQU66FosDVs&from_coordinate=48.8566%2C2.3522&to_coordinate=45.764043%2C4.835659&from_country=FR&to_country=FR&locale=en-GB&currency=EUR&count=20");
        if (nextCursor) {
            finalUrl.searchParams.append("from_cursor", nextCursor);
        }

        return fetchGet(finalUrl.href)
            .then(response => response.json())
            .catch(error => console.log("getJson " + error));
    };


    static  getFakeRides = () => {
        const url = "https://public-api.blablacar.com/api/v3/trips?key=MY_API_KEY&from_coordinate=52.843625&to_coordinate=55.5807419,36.823769&from_country=FR&to_country=FR&locale=en-GB&start_date_local=2020-03-10T20:00:00&currency=EUR";
        const invalidSearch = "https://public-api.blablacar.com/invalid/search";
        const err500 = "https://public-api.blablacar.com/api/v3/trips?key=YzbiA8L6DcqxTvSna1lOFQQU66FosDVs";
        let finalUrl = new URL(err500);
        return fetchGet(finalUrl.href)
            .then(response => response.json())
            .catch(error => console.log("getJson " + error));
    }

}

const fetchGet = (url: string, requestInit?: RequestInit) =>
    fetch(url, {method: "GET", ...requestInit});
