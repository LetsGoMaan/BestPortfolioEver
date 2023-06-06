import React from "react";
import {faX} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ownStyles from './GoBack.module.css'
import {useNavigate} from "react-router-dom";


export const GoBack = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };


    return (
        <>
            <div onClick={handleGoBack}>
                <FontAwesomeIcon icon={faX} className={ownStyles.xMark} />
            </div>
        </>
    );
};

