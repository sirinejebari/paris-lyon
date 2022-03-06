import {useSelector} from "react-redux";
import {TripsState} from "../../../store/definition/state";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRobot} from "@fortawesome/free-solid-svg-icons";

export const Error: React.FC = () => {
    const error = useSelector((state: TripsState) => state.errorMessage);

    return (<div className="Error col center-align">
        <FontAwesomeIcon icon={faRobot} size="5x" className="Spinner-icon"/>

        <div className="Error-oops">
            Oups ! Something went wrong :/
        </div>

        <div className="Error-error">
            {error}
        </div>

    </div>)
}