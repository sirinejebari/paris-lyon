import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons'
import "./Spinner.scss";
import {SizeProp} from "@fortawesome/fontawesome-svg-core";

export const Spinner: React.FC<{size?: SizeProp}> = ({size = "lg"}) => {
    return (
        <div className="Spinner">
            <FontAwesomeIcon icon={faCircleNotch} spin size={size} className="Spinner-icon"/>
        </div>)
}
