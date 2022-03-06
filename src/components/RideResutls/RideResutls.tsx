import React from "react";
import {Table} from "./Table/Table";
import {LoadingRides} from "./LoadingRides/LoadingRides";
import {RideSummary} from "./RideSummary/RideSummary";
import {Error} from "./Error/Error";
import {NoRides} from "./NoRides/NoRides";
import {TripsState} from "../../store/definition/state";
import {useSelector} from "react-redux";
import {ResultCount} from "./ResultCount/ResultCount";

export const RideResutls: React.FC = () => {
    const trips = useSelector((state: TripsState) => state.trips)
    const error = useSelector((state: TripsState) => state.errorMessage)
    return (
        <div className="RidesTable col">

            <RideSummary/>

            {!trips && !error && <LoadingRides/>}
            {error && <Error/>}
            {trips && trips.length === 0 && <NoRides/>}
            {trips && trips.length &&
            <div className="RidesTable-results col">

                <ResultCount/>

                <div className="row">
                    <div className="RidesTable-recap col s10 m8 offset-m2 offset-s1 left-align">
                        <Table/>
                    </div>
                </div>
            </div>
            }

        </div>
    )
}