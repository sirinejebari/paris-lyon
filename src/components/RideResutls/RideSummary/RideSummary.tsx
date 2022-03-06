import {Info} from "../../Info/Info";
import {faCalendarDay, faFlagCheckered, faMapPin} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const RideSummary: React.FC = () => {
    return (
        <div className="RidesTable-recap row">
            <div className="col s10 m8 offset-m2 offset-s1 left-align">
            <div className="card-panel">
                <h5 className="center-align">Your ride details</h5>
                <Info icon={faMapPin} label="From" value="Paris"/>
                <Info icon={faFlagCheckered} label="To" value="Lyon"/>
                <Info icon={faCalendarDay} label="Date" value={(new Date()).toDateString()}/>

            </div>
            </div>
        </div>
    )
}