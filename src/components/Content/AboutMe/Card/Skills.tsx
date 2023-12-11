import React from "react";
import ownStyles from "../AboutMe.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase, faCalendar} from "@fortawesome/free-solid-svg-icons";

type CardType = {
    cardTitle: string
}


export const Skills = (props: CardType) => {
    return (
        <>
            <div className={ownStyles.card}>
                <div className={ownStyles.cardHeader}>
                    <FontAwesomeIcon icon={faBriefcase} className={ownStyles.resumeIcons}/>
                    {props.cardTitle}
                </div>

                <div className={ownStyles.cardBody}>
                    <div className={ownStyles.imageBox}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height={100}  />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"   height={100} />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  height={100} />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" height={100} />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height={100} />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg" height={100} />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" height={100} />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" height={100} />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" height={100} />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" height={100} />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" height={100} />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height={100} />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" height={100} />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg" height={100} />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" height={100} />
                    </div>





                    {/*<div>*/}
                    {/*   */}
                    {/*    <h6 className={ownStyles.cardSubtitle}><span>Front-end Developer - </span>InnovateNow</h6>*/}
                    {/*    <span className={ownStyles.date}>*/}
                    {/*                        <FontAwesomeIcon icon={faCalendar} className={ownStyles.dateIcon}/>*/}
                    {/*                         2023 Q3 - 2023 Until now*/}
                    {/*                    </span>*/}
                    {/*    <p className={ownStyles.cardText}>*/}
                    {/*       */}
                    {/*        I completed specialized front-end development courses to enhance my skills in HTML, CSS, JavaScript, React, and TypeScript. I am excited to apply my knowledge to create innovative web applications that meet the needs of modern users.*/}
                    {/*    </p>*/}
                    {/*</div>*/}
                    {/*<div className={ownStyles.cardBodyDivider}></div>*/}
                    {/*<div>*/}
                    {/*    <h6 className={ownStyles.cardSubtitle}><span>Front-end Developer - </span>FREELANCE</h6>*/}
                    {/*    <span className={ownStyles.date}>*/}
                    {/*                        <FontAwesomeIcon icon={faCalendar} className={ownStyles.dateIcon}/>*/}
                    {/*                         2023 Q1 - 2023 Q2*/}
                    {/*                    </span>*/}
                    {/*    <p className={ownStyles.cardText}>*/}
                    {/*        Through online resources and personal projects, I gained proficiency in HTML, CSS, JavaScript, React, and other front-end technologies. I continuously sought new challenges to further my growth and development as a developer, improving my skills and staying up-to-date with industry trends.*/}
                    {/*    </p>*/}
                    {/*</div>*/}
                    {/*<div className={ownStyles.cardBodyDivider}></div>*/}
                    {/*<div>*/}
                    {/*    <h6 className={ownStyles.cardSubtitle}><span>Salesman - </span>E-commerce businesses</h6>*/}
                    {/*    <span className={ownStyles.date}>*/}
                    {/*                        <FontAwesomeIcon icon={faCalendar} className={ownStyles.dateIcon}/>*/}
                    {/*                         2015 - 2023*/}
                    {/*                    </span>*/}
                    {/*    <p className={ownStyles.cardText}>*/}
                    {/*        I earned a Bachelor's degree from the Belarusian State Economic University, where I studied courses in economics, business management, and finance. My studies provided me with a strong foundation in these areas, equipping me with the skills and knowledge necessary to excel in a business environment and contribute to the success of any organization.*/}
                    {/*    </p>*/}
                    {/*</div>*/}
                </div>
            </div>
        </>
    );
};

