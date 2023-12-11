import React from "react";
import ownStyles from "../MyPortfolio.module.css";

type ProjectType = {
    index: number
    project: string
}

export const Project = (props: ProjectType) => {
    return (
        <>

            <div className={ownStyles.project} key={props.index}>
                <img className={ownStyles.projectImage} src={process.env.PUBLIC_URL + props.project} alt={`project${props.index+1}`}/>
                <div className={ownStyles.overlay}>
                    <button className={ownStyles.button1}><a>DEMO</a></button>
                    <button className={ownStyles.button2}><a>CODE</a></button>
                </div>
            </div>
        </>
    );
};

