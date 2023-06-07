import React from "react";
import ownStyles from "../AboutMe.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

type BadgeType = {
    iconName: IconProp
    badgeNumber: string
    badgeText: string
}

export const Badge = (props: BadgeType) => {
    return (
        <>
            <div className={ownStyles.badgeWrapper}>
                <FontAwesomeIcon icon={props.iconName} className={ownStyles.badgeIcon}/>
                <span className={ownStyles.badgeText}>{props.badgeNumber}</span>
                <h6 className={ownStyles.badgeTitle}>{props.badgeText}</h6>
            </div>
        </>
    );
};

