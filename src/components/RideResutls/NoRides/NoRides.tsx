import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {faFaceSadTear} from '@fortawesome/free-solid-svg-icons'
import "./NoRides.scss";

export const NoRides: React.FC = () => (
    <div className="NoRides">
        <div className="col center-align">
            <FontAwesomeIcon icon={faFaceSadTear} size="4x" className="NoRides-icon"/>
            <div className="NoRides-text">No Rides found for your itenerary, try again later !</div>
        </div>
    </div>
)