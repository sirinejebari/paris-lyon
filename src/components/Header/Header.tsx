import React from "react";
import {IconSystemTimer} from "../../icon";
import "./Header.scss";

export const dateOptions: Intl.DateTimeFormatOptions = {weekday: "long", year: "numeric", month: "long", day: "numeric"};

export const Header: React.FC = () => {
    const today = new Date();

    return (
        <div className="Header row z-depth-2">
            <div className="Header-logo col s6 left-align">
                <IconSystemTimer/>
            </div>

            <div className="Header-timedate col s6 right-align hide-on-small-only" title={today.toDateString()}>
                {today.toLocaleDateString('en-US', dateOptions)}
            </div>
        </div>

    )
}