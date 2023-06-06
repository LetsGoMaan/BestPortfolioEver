import React from "react";
import commonStyles from "../../../common/styles/commonStyles.module.css";
import {NavLink} from "react-router-dom";

type NavBlockType = {
    firstWord: string
    secondWord: string
    classNameSection: string
    nav: string
}

export const NavBlock = (props: NavBlockType) => {
    return (
        <>
            <section className={props.classNameSection}>
            <NavLink to={props.nav} >
                <div className={commonStyles.textContainer}>
                    <div className={commonStyles.firstPair}>
                        <div className={`${commonStyles.text} ${commonStyles.aboutWhite}`}>{props.firstWord}</div>
                        <div className={`${commonStyles.text} ${commonStyles.meWhite}`}>{props.secondWord}</div>
                    </div>
                    <div className={commonStyles.secondPair} >
                        <div className={`${commonStyles.text} ${commonStyles.aboutOrange}`}>{props.firstWord}</div>
                        <div className={`${commonStyles.text} ${commonStyles.meOrange}`}>{props.secondWord}</div>
                    </div>
                </div>
            </NavLink>
            </section>
        </>
    );
};

