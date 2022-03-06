import React from "react";
import {Spinner} from "../../Spinner/Spinner";
import "./LoadingRides.scss";

export const LoadingRides: React.FC = () => {
    return (<div className="LoadingRides">
        <div className="col center-align">
            <Spinner size="5x"/>
            <div className="LoadingRides-text">Finding you the best trips...</div>
        </div>
    </div>)
}