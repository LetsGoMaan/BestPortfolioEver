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
                        <h6 className={ownStyles.cardSubtitle}><span>Front-end Developer - </span>SMART CARDS </h6>
                        {/*<span className={ownStyles.date}>*/}
                        {/*                    <FontAwesomeIcon icon={faCalendar} className={ownStyles.dateIcon}/>*/}
                        {/*                     2023 Q3 - 2023 Until now*/}
                        {/*                </span>*/}
                        <p className={ownStyles.cardText}>
                            STACK: React, Typescript, JavaScript, React-Hook-Form,
                            SASS, RTK Query, React-Redux, Radix, React-Router-Dom,
                            React-Toastify, zod
                            <h6 className={ownStyles.taskTitle}>TASKS:</h6>
                            <ul className={ownStyles.tasksList}>
                                <li> Developing the user interface and styling it with SASS.</li>
                                <li> Implementing form validation with React-Hook-Form and zod.</li>
                                <li>Handling server communication with RTK Query.</li>
                            </ul>
                        </p>
                    </div>
                    <div className={ownStyles.cardBodyDivider}></div>
                    <div>
                        <h6 className={ownStyles.cardSubtitle}><span>Front-end Developer - </span>SOCIAL NETWORK</h6>
                        {/*<span className={ownStyles.date}>*/}
                        {/*                    <FontAwesomeIcon icon={faCalendar} className={ownStyles.dateIcon}/>*/}
                        {/*                     2023 Q1 - 2023 Q2*/}
                        {/*                </span>*/}
                        <p className={ownStyles.cardText}>
                            STACK: React, Typescript, JavaScript, Redux-Form, Redux,
                            React-Redux,Reselect, React-Router-Dom
                            <h6 className={ownStyles.taskTitle}>TASKS:</h6>
                            <ul className={ownStyles.tasksList}>
                                <li> Developing user interface components for profiles,
                                    news feeds, posts, comments.
                                </li>
                                <li> Managing application state with Redux.</li>
                                <li>Setting up routing using React-Router-Dom.</li>
                                <li>Optimizing data selection using Reselect.</li>
                            </ul>
                        </p>
                    </div>
                    <div className={ownStyles.cardBodyDivider}></div>
                    <div>
                        <h6 className={ownStyles.cardSubtitle}><span>Front-end Developer - </span>TASK MANAGER
                        </h6>
                        {/*<span className={ownStyles.date}>*/}
                        {/*                    <FontAwesomeIcon icon={faCalendar} className={ownStyles.dateIcon}/>*/}
                        {/*                     2015 - 2023*/}
                        {/*                </span>*/}
                        <p className={ownStyles.cardText}>
                            STACK: React, Typescript, JavaScript, Axios, Formik, Reduxthunk, Material UI, React-Redux,React-Router-Dom
                            <h6 className={ownStyles.taskTitle}>TASKS:</h6>
                            <ul className={ownStyles.tasksList}>
                                <li> Developing the user interface using Material UI.
                                </li>
                                <li> Сreate actions to modify the state and use reducers
                                    to update it</li>
                                <li>Handle user input, validate data, and update form
                                    state.</li>
                                <li>Interacting with the server using Axios.</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

