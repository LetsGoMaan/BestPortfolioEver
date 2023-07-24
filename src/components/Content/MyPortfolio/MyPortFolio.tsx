import React, {useState} from "react";
import ownStyles from "./MyPortfolio.module.css";
import {Title} from "../../common/Title/Title";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSuitcase} from "@fortawesome/free-solid-svg-icons";
// import project1 from "../../../assets/img/project-1.png"
// import project2 from "../../../assets/img/project-2.png"
// import project3 from "../../../assets/img/project-3.png"
// import project4 from "../../../assets/img/project-4.png"
// import project5 from "../../../assets/img/project-5.png"
// import project6 from "../../../assets/img/project-6.png"
// import project7 from "../../../assets/img/project-7.png"
// import project8 from "../../../assets/img/project-8.png"
// import project9 from "../../../assets/img/project-9.png"

import project1 from "../../../assets/img/project-1.jpg"
import project2 from "../../../assets/img/project-2.jpg"
import project3 from "../../../assets/img/project-3.jpg"
import project4 from "../../../assets/img/project-4.jpg"
import project5 from "../../../assets/img/project-5.jpg"
import project6 from "../../../assets/img/project-6.jpg"
import project7 from "../../../assets/img/project-7.jpg"
import project8 from "../../../assets/img/project-8.jpg"
import project9 from "../../../assets/img/project-9.jpg"
import {Project} from "./Project/Project";
import {GoBack} from "../../common/GoBack/GoBack";
import {useNavigate} from "react-router-dom";
import commonStyles from "../../common/commonStyles.module.css";
import {CSSTransition} from "react-transition-group";


export const MyPortFolio = () => {
    const projects = [project1, project2, project3, project4,
        project5, project6, project7, project8, project9];

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
                unmountOnExit>
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

