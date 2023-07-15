import React from "react";
import {faX} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ownStyles from "./GoBack.module.css"


type PropsType = {
    onClickHandler: () => void
}

export const GoBack = ({onClickHandler}:PropsType) => {

    const onClickHandlerGoBack = () => {
        onClickHandler()
    };


    return (
        <>

            <div onClick={onClickHandlerGoBack}>
                <FontAwesomeIcon icon={faX} className={ownStyles.xMark} />
            </div>
        </>
    );
};

