import React from "react";
import ownStyles from "./Title.module.css";

type TitlePropsType = {
    icon: React.ReactNode;
    firstWord: string;
    secondWord: string;
}


export const Title = (props:TitlePropsType) => {
    return (
        <>
            <h2 className={ownStyles.title}>
                <span className={ownStyles.firstWord}>{props.firstWord}</span>
                <span className={ownStyles.secondWord}>{props.secondWord}</span>
            </h2>
            <div className={ownStyles.dividerBlock}>
                <div className={ownStyles.divider}></div>
                <span className={ownStyles.icon}>
                    {props.icon}
                </span>
                <div className={ownStyles.divider}></div>
            </div>
        </>
    );
};

