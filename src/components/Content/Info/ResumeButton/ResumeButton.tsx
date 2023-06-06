import React from "react";
import ownStyles from "../Info.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

type ResumeButtonType = {
    onClick: () => void
    buttonStatus: boolean
    iconName: IconProp
    buttonText: string
}

export const ResumeButton = (props: ResumeButtonType) => {
    return (
        <>
            <div onClick={props.onClick} className={`${ownStyles.resumeButton} ${props.buttonStatus ? ownStyles.active : ""}`}>
                <FontAwesomeIcon icon={props.iconName} className={ownStyles.resumeIcons}/>
                {props.buttonText}
            </div>
        </>
    );
};

