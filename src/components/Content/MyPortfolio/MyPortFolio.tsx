import React, {useState} from "react";
import ownStyles from "./MyPortfolio.module.css";
import {Title} from "../../common/Title/Title";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSuitcase} from "@fortawesome/free-solid-svg-icons";
import {Project} from "./Project/Project";
import {GoBack} from "../../common/GoBack/GoBack";
import {useNavigate} from "react-router-dom";
import commonStyles from "../../common/commonStyles.module.css";
import {CSSTransition} from "react-transition-group";


export const MyPortFolio = () => {
    const projects = ['/img/project-1.jpg', '/img/project-2.jpg', '/img/project-3.jpg', '/img/project-4.jpg',
        '/img/project-5.jpg', '/img/project-6.jpg', '/img/project-7.jpg', '/img/project-8.jpg', '/img/project-9.jpg'];

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
                // mountOnEnter
                // unmountOnExit
            >
            <section className={ownStyles.projectSection}>
                <div className={ownStyles.projectsContainer}>
                    <GoBack onClickHandler={onClickHandler}/>
                    <Title icon={<FontAwesomeIcon icon={faSuitcase}/>} firstWord={"MY"} secondWord={"PORTFOLIO"}/>
                    <div className={ownStyles.projectsWrapper}>
                        {projects.map((project, index) => (
                                <Project project={project} index={index}/>
                        ))}
                    </div>
                </div>
            </section>
            </CSSTransition>
        </>

    );
};

