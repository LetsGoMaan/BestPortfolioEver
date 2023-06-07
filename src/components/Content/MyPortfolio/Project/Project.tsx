import React from "react";
import ownStyles from "../MyPortfolio.module.css";

type ProjectType = {
    index: number
    project: string
}

export const Project = (props: ProjectType) => {
    return (
        <>
            <div className={ownStyles[`project${props.index+1}`]} key={props.index}>
                <img className={ownStyles.projectImage} src={props.project} alt={`project${props.index+1}`}/>
            </div>
        </>
    );
};

