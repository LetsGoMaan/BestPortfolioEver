import React, {useState} from "react";
import ownStyles from "./AboutMe.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressCard, faBriefcase, faGraduationCap, faHandshake, faStar} from "@fortawesome/free-solid-svg-icons";
import {Title} from "../../common/Title/Title";
import {Card} from "./Card/Card";
import {ResumeButton} from "./ResumeButton/ResumeButton";
import {GoBack} from "../../common/GoBack/GoBack";
import {PersonalInfo} from "./PersonalInfo/PersonalInfo";
import {Badge} from "./Badge/Badge";

export const AboutMe = () => {
    const [isButtonActive, setIsButtonActive] = useState({experience: true, education: false, skills: false});

    const handleExperienceButtonOnclick = () => {
        setIsButtonActive({
            experience: true,
            education: false,
            skills: false
        });
    };
    const handleEducationButtonOnclick = () => {
        setIsButtonActive({
            experience: false,
            education: true,
            skills: false
        });
    };
    const handleSkillsButtonOnclick = () => {
        setIsButtonActive({
            experience: false,
            education: false,
            skills: true
        });
    };

    return (
        <>
            <section>
                <div className={ownStyles.info}>
                <GoBack/>
                    <Title icon={<FontAwesomeIcon icon={faAddressCard}/>} firstWord={"About"} secondWord={"Me"}/>
                    <PersonalInfo/>
                </div>
                <div className={ownStyles.resumeContainer}>
                    <div className={ownStyles.resumeWrapper}>
                        <div className={ownStyles.resumeButtons}>
                            <ResumeButton onClick={handleExperienceButtonOnclick} buttonStatus={isButtonActive.experience} iconName={faBriefcase} buttonText={"EXPERIENCE"}/>
                            <ResumeButton onClick={handleEducationButtonOnclick} buttonStatus={isButtonActive.education} iconName={faGraduationCap} buttonText={"EDUCATION"}/>
                            <ResumeButton onClick={handleSkillsButtonOnclick} buttonStatus={isButtonActive.skills} iconName={faStar} buttonText={"SKILLS"}/>
                        </div>
                    </div>
                    <div className={ownStyles.cardsWrapper}>
                        {isButtonActive.experience && <Card cardTitle={"EXPERIENCE"}/>}
                        {isButtonActive.education && <Card cardTitle={"EDUCATION"}/>}
                        {isButtonActive.skills && <Card cardTitle={"SKILLS"}/>}
                    </div>
                </div>
                <div className={ownStyles.containerBadges}>
                    <Badge iconName={faBriefcase} badgeNumber={"4+"} badgeText={"Years Experience"}/>
                    <Badge iconName={faHandshake} badgeNumber={"10+"} badgeText={"DONE PROJECTS"}/>
                    <Badge iconName={faBriefcase} badgeNumber={"77+"} badgeText={"HAPPY CUSTOMERS"}/>
                </div>
            </section>
        </>
    );
};

