import React from "react";
import ownStyles from "./Projects.module.css";
import {Title} from "../../common/Title/Title";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSuitcase} from "@fortawesome/free-solid-svg-icons";
import project1 from "../../../assets/img/project-1.png"
import project2 from "../../../assets/img/project-2.png"
import project3 from "../../../assets/img/project-3.png"
import project4 from "../../../assets/img/project-4.png"
import project5 from "../../../assets/img/project-5.png"
import project6 from "../../../assets/img/project-6.png"
import project7 from "../../../assets/img/project-7.png"
import project8 from "../../../assets/img/project-8.png"
import project9 from "../../../assets/img/project-9.png"

export const Projects = () => {
    return (
        <section>
           <div className={ownStyles.projectsContainer}>
               <Title icon={<FontAwesomeIcon icon={faSuitcase}/>} firstWord={"MY"} secondWord={"PORTFOLIO"}/>
               <div className={ownStyles.projectsWrapper}>
                   <div className={ownStyles.project1}>
                       <img className={ownStyles.projectImage} src={`${project1}`} alt="project1"/>
                   </div>
                   <div className={ownStyles.project2}>
                       <img className={ownStyles.projectImage} src={`${project2}`} alt="project2"/>
                   </div>
                   <div className={ownStyles.project3}>
                       <img className={ownStyles.projectImage} src={`${project3}`} alt="project3"/>
                   </div>
                   <div className={ownStyles.project4}>
                       {/*<FontAwesomeIcon className={ownStyles.projectImage} icon={faRectangleList} />*/}
                       <img className={ownStyles.projectImage} src={`${project4}`} alt="project4"/>
                   </div>
                   <div className={ownStyles.project5}>
                       <img className={ownStyles.projectImage} src={`${project5}`} alt="project5"/>
                   </div>
                   <div className={ownStyles.project6}>
                       <img className={ownStyles.projectImage} src={`${project6}`} alt="project6"/>
                   </div>
                   <div className={ownStyles.project7}>
                       <img className={ownStyles.projectImage} src={`${project7}`} alt="project7"/>
                   </div>
                   <div className={ownStyles.project8}>
                       <img className={ownStyles.projectImage} src={`${project8}`} alt="project8"/>
                   </div>
                   <div className={ownStyles.project9}>
                       <img className={ownStyles.projectImage} src={`${project9}`} alt="project9"/>
                   </div>
               </div>
           </div>
        </section>
    );
};

