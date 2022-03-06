import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import "./Info.scss";

type InfoPros = {
    icon: IconDefinition
    label: string;
    value: string
}

export const Info: React.FC<InfoPros> = ({icon, label, value}) => {
    return (
        <div className="Info row">
            <FontAwesomeIcon icon={icon} size="lg" className="Info-icon" />
            &nbsp;
            <span>{label}:&nbsp;<strong>{value}</strong></span>
        </div>
    )
}