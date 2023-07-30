import React from "react";
import ownStyles from "../AboutMe.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase, faCalendar} from "@fortawesome/free-solid-svg-icons";

type CardType = {
    cardTitle: string
}


export const Experience = (props: CardType) => {
    return (
        <>
            <div className={ownStyles.card}>
                <div className={ownStyles.cardHeader}>
                    <FontAwesomeIcon icon={faBriefcase} className={ownStyles.resumeIcons}/>
                    {props.cardTitle}
                </div>
                <div className={ownStyles.cardBody}>
                    <div>
                        <h6 className={ownStyles.cardSubtitle}><span>Front-end Developer - </span>InnovateNow</h6>
                        <span className={ownStyles.date}>
                                            <FontAwesomeIcon icon={faCalendar} className={ownStyles.dateIcon}/>
                                             2023 Q3 - 2023 Until now
                                        </span>
                        <p className={ownStyles.cardText}>
                            I created web pages and applications using HTML, CSS, JavaScript, React, and TypeScript. I collaborated with designers and back-end developers to ensure a seamless user experience. I kept up-to-date with the latest technologies to improve functionality and appeal, delivering high-quality results.
                        </p>
                    </div>
                    <div className={ownStyles.cardBodyDivider}></div>
                    <div>
                        <h6 className={ownStyles.cardSubtitle}><span>Front-end Developer - </span>FREELANCE</h6>
                        <span className={ownStyles.date}>
                                            <FontAwesomeIcon icon={faCalendar} className={ownStyles.dateIcon}/>
                                             2023 Q1 - 2023 Q2
                                        </span>
                        <p className={ownStyles.cardText}>
                            As a freelance front-end developer, I have extensive experience in creating visually stunning and highly functional websites and web applications. My expertise in front-end development technologies and frameworks, combined with my ability to deliver projects exceeding my clients' expectations, have led to successful projects for a diverse range of clients.
                        </p>
                    </div>
                    <div className={ownStyles.cardBodyDivider}></div>
                    <div>
                        <h6 className={ownStyles.cardSubtitle}><span>Salesman - </span>E-commerce businesses</h6>
                        <span className={ownStyles.date}>
                                            <FontAwesomeIcon icon={faCalendar} className={ownStyles.dateIcon}/>
                                             2015 - 2023
                                        </span>
                        <p className={ownStyles.cardText}>
                            I am an experienced e-commerce sales manager who consistently exceeds targets, develops effective strategies, manages teams, and builds stakeholder relationships. With my help, businesses have increased sales and revenue by over 50% and grown their customer base by over 30%.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

