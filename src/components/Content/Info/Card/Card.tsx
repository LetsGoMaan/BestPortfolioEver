import React from "react";
import ownStyles from "../Info.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase, faCalendar} from "@fortawesome/free-solid-svg-icons";

type CardType = {
    cardTitle: string
}


export const Card = (props: CardType) => {
    return (
        <>
            <div className={ownStyles.card}>
                <div className={ownStyles.cardHeader}>
                    <FontAwesomeIcon icon={faBriefcase} className={ownStyles.resumeIcons}/>
                    {props.cardTitle}
                </div>
                <div className={ownStyles.cardBody}>
                    <div>
                        <h6 className={ownStyles.cardSubtitle}><span>WEB DESIGNER - </span>ENVATO</h6>
                        <span className={ownStyles.date}>
                                            <FontAwesomeIcon icon={faCalendar} className={ownStyles.dateIcon}/>
                                             2015 - 2023
                                        </span>
                        <p className={ownStyles.cardText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci
                            sit amet mi ullamcorper
                        </p>
                    </div>
                    <div className={ownStyles.cardBodyDivider}></div>
                    <div>
                        <h6 className={ownStyles.cardSubtitle}><span>WEB DESIGNER - </span>ENVATO</h6>
                        <span className={ownStyles.date}>
                                            <FontAwesomeIcon icon={faCalendar} className={ownStyles.dateIcon}/>
                                             2015 - 2023
                                        </span>
                        <p className={ownStyles.cardText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci
                            sit amet mi ullamcorper
                        </p>
                    </div>
                    <div className={ownStyles.cardBodyDivider}></div>
                    <div>
                        <h6 className={ownStyles.cardSubtitle}><span>WEB DESIGNER - </span>ENVATO</h6>
                        <span className={ownStyles.date}>
                                            <FontAwesomeIcon icon={faCalendar} className={ownStyles.dateIcon}/>
                                             2015 - 2023
                                        </span>
                        <p className={ownStyles.cardText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci
                            sit amet mi ullamcorper
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

