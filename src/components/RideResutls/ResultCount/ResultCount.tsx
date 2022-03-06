import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFaceGrinStars} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {useSelector} from "react-redux";
import {TripsState} from "../../../store/definition/state";
import "./ResultCount.scss";

export const ResultCount: React.FC = () => {
    const count = useSelector((state: TripsState) => state.availableTrips)

    return (<div className="ResultCount">
        <div className="row center-align">
            <span><FontAwesomeIcon icon={faFaceGrinStars} size="2x" className="ResultCount-icon"/></span>
            <div className="ResultCount-text" data-testid="ResultCount-text"
                 style={{lineHeight: "32px"}}><strong>{count}</strong> carpoolers
                available to have you onboard !
            </div>
        </div>
    </div>)
}