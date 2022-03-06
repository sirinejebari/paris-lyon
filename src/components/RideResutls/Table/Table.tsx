import {Trip} from "../../../definitions/Trip";
import React, {useEffect, useState} from "react";
import {Utils} from "../Utils";
import "./Table.scss";
import {useDispatch, useSelector} from "react-redux";
import {TripsState} from "../../../store/definition/state";
import {fetchFailed, loadRides} from "../../../store/actions";
import {Spinner} from "../../Spinner/Spinner";
import {TripsApi} from "../../../api/TripsApi";

export const Table: React.FC = () => {
    const trips = useSelector((state: TripsState) => state.trips)
    const nextCursor = useSelector((state: TripsState) => state.next_cursor)
    const [isFetchingMore, setIsFetchingMore] = useState<boolean | undefined>(undefined)
    const dispatch = useDispatch();

    const goToRide = (link: string) => {
        window.open(link, "_blank");
    }

    const fetchMoreTrips = () => {
        setIsFetchingMore(true)
        TripsApi.getTrips(nextCursor).then((result: any) => {
                if (!result.trips) {
                    dispatch(fetchFailed(result.message ?? "A technical error occurred"))
                    console.log(result);
                } else {
                    setIsFetchingMore(false)
                    dispatch(loadRides(result.trips ?? [], (result.search_info.count - result.search_info.full_trip_count), result.next_cursor))
                }
        })
            .catch((err: string) => {
                setIsFetchingMore(false)
                dispatch(fetchFailed(err))
            })
    }

    useEffect(() => {
        window.onscroll = () => {
            if ((window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight) {
                if(nextCursor && !isFetchingMore) {
                    fetchMoreTrips()
                }
            }
        }
    }, [nextCursor, isFetchingMore])

    return (
        <div className="Table">
            <table className="highlight  striped">
                <thead>
                <tr>
                    <th>Price</th>
                    <th>Duration</th>
                    <th>Distance</th>
                    <th>Vehicule</th>
                </tr>
                </thead>

                <tbody>
                {trips && trips.map((trip: Trip, index: number) => (
                    <tr key={`trip-${index}`} onClick={() => goToRide(trip.link)}>
                        <td>{trip.price.amount}&nbsp;{trip.price.currency}</td>
                        <td>{Utils.convertSecondsToDuration(trip.duration_in_seconds)}</td>
                        <td>{Math.floor(trip.distance_in_meters / 1000)}&nbsp;Km</td>
                        <td>{Utils.computeVehicle(trip.vehicle)}</td>
                    </tr>
                ))}

                </tbody>
            </table>


            {isFetchingMore && <div className="Table-spinner row center-align">
                <Spinner/>
            </div>}

        </div>
    )
}