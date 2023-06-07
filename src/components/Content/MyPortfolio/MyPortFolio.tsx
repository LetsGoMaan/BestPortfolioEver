import React from "react";
import ownStyles from "./MyPortfolio.module.css";
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
import {Project} from "./Project/Project";
import {GoBack} from "../../common/GoBack/GoBack";

export const MyPortFolio = () => {
    const projects = [project1, project2, project3, project4,
        project5, project6, project7, project8, project9];

    return (
        <section>
           <div className={ownStyles.projectsContainer}>
               <GoBack/>
               <Title icon={<FontAwesomeIcon icon={faSuitcase}/>} firstWord={"MY"} secondWord={"PORTFOLIO"}/>
               <div className={ownStyles.projectsWrapper}>
                       {projects.map((project, index) => (
                           <Project project={project} index={index}/>
                       ))}
               </div>
           </div>
        </section>
    );
};

