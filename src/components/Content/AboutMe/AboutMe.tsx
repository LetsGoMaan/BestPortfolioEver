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
import {CSSTransition} from "react-transition-group";
import {useNavigate} from "react-router-dom";
import commonStyles from '../../common/commonStyles.module.css'


type ActiveButtonType = {
    experience: boolean,
    education: boolean,
    skills: boolean
}

export const AboutMe = () => {
    const [isButtonActive, setIsButtonActive] = useState({experience: true, education: false, skills: false});

    const handleActiveButton = (activeButton: ActiveButtonType) => {
        setIsButtonActive(activeButton);
    };
    const [isEnter, setIsEnter] = useState(true)
    console.log(isEnter)
    const navigate = useNavigate();
    const onClickHandler = () => {
        setIsEnter((v) => !v)
        setTimeout(() => {
            navigate(-1)
        }, 750)

    }

    return (
        <>
            <CSSTransition
                in={isEnter}
                timeout={750}
                classNames={{
                    appear: commonStyles.myclassAppear,
                    appearActive: commonStyles.myclassAppearActive,
                    appearDone: commonStyles.myclassAppearDone,
                    enter: commonStyles.myclassEnter,
                    enterActive: commonStyles.myclassEnterActive,
                    enterDone: commonStyles.myclassEnterDone,
                    exit: commonStyles.myclassExit,
                    exitActive: commonStyles.myclassExitActive,
                    exitDone: commonStyles.myclassExitDone
                }}
                appear={true}
                mountOnEnter
                unmountOnExit

            >
            <section >
                <div className={ownStyles.info} >
                    {/*<div onClick={onClickHandler}>*/}
                    {/*    <FontAwesomeIcon icon={faX} className={ownStyles.xMark} />*/}
                    {/*</div>*/}
                    <GoBack onClickHandler={onClickHandler}/>
                    <Title icon={<FontAwesomeIcon icon={faAddressCard}/>} firstWord={"About"} secondWord={"Me"}/>
                    <PersonalInfo/>
                </div>
                <div className={ownStyles.resumeContainer}>
                    <div className={ownStyles.resumeWrapper}>
                        <div className={ownStyles.resumeButtons}>
                            <ResumeButton onClick={() => handleActiveButton({
                                experience: true,
                                education: false,
                                skills: false
                            })}
                                          buttonStatus={isButtonActive.experience} iconName={faBriefcase}
                                          buttonText={"EXPERIENCE"}/>
                            <ResumeButton onClick={() => handleActiveButton({
                                experience: false,
                                education: true,
                                skills: false
                            })}
                                          buttonStatus={isButtonActive.education}
                                          iconName={faGraduationCap} buttonText={"EDUCATION"}/>
                            <ResumeButton onClick={() => handleActiveButton({
                                experience: false,
                                education: false,
                                skills: true
                            })} buttonStatus={isButtonActive.skills}
                                          iconName={faStar} buttonText={"SKILLS"}/>
                        </div>
                        <div className={ownStyles.cardsWrapper}>
                            {isButtonActive.experience && <Card cardTitle={"EXPERIENCE"}/>}
                            {isButtonActive.education && <Card cardTitle={"EDUCATION"}/>}
                            {isButtonActive.skills && <Card cardTitle={"SKILLS"}/>}
                        </div>
                        <div className={ownStyles.cardsWrapperMobile}>
                            <Card cardTitle={"EXPERIENCE"}/>
                            <Card cardTitle={"EDUCATION"}/>
                            <Card cardTitle={"SKILLS"}/>
                        </div>
                    </div>

                </div>
                <div className={ownStyles.containerBadges}>
                    <Badge iconName={faBriefcase} badgeNumber={"4+"} badgeText={"Years Experience"}/>
                    <Badge iconName={faHandshake} badgeNumber={"10+"} badgeText={"DONE PROJECTS"}/>
                    <Badge iconName={faBriefcase} badgeNumber={"77+"} badgeText={"HAPPY CUSTOMERS"}/>
                </div>
            </section>
            </CSSTransition>
        </>
    );
};

