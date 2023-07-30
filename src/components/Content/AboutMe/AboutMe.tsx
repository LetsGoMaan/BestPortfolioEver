import React, {useState} from "react";
import ownStyles from "./AboutMe.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAddressCard,
    faBriefcase,
    faChalkboardUser,
    faCode,
    faGraduationCap,
    faStar
} from "@fortawesome/free-solid-svg-icons";
import {Title} from "../../common/Title/Title";
import {Experience} from "./Card/Experience";
import {ResumeButton} from "./ResumeButton/ResumeButton";
import {GoBack} from "../../common/GoBack/GoBack";
import {PersonalInfo} from "./PersonalInfo/PersonalInfo";
import {Badge} from "./Badge/Badge";
import {CSSTransition} from "react-transition-group";
import {useNavigate} from "react-router-dom";
import commonStyles from "../../common/commonStyles.module.css"
import {Education} from "./Card/Education";
import {Skills} from "./Card/Skills";


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
                            {isButtonActive.experience && <Experience cardTitle={"EXPERIENCE"}/>}
                            {isButtonActive.education && <Education cardTitle={"EDUCATION"}/>}
                            {isButtonActive.skills && <Skills cardTitle={"SKILLS"}/>}
                        </div>
                        <div className={ownStyles.cardsWrapperMobile}>
                            <Experience cardTitle={"EXPERIENCE"}/>
                            <Education cardTitle={"EDUCATION"}/>
                            <Skills cardTitle={"SKILLS"}/>
                        </div>
                    </div>

                </div>
                <div className={ownStyles.containerBadges}>
                    <Badge iconName={faChalkboardUser} badgeNumber={"1.5+"} badgeText={"Years Experience"}/>
                    <Badge iconName={faBriefcase} badgeNumber={"10+"} badgeText={"DONE PROJECTS"}/>
                    <Badge iconName={faCode} badgeNumber={"2K+"} badgeText={"HOURS OF CODING"}/>
                </div>
            </section>
            </CSSTransition>
        </>
    );
};

