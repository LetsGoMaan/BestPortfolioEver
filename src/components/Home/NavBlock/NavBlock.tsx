import React from "react";
import ownStyles from "./NavBlock.module.css";
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
                <div className={ownStyles.textContainer}>
                    <div className={ownStyles.firstPair}>
                        <div className={`${ownStyles.text} ${ownStyles.aboutWhite}`}>{props.firstWord}</div>
                        <div className={`${ownStyles.text} ${ownStyles.meWhite}`}>{props.secondWord}</div>
                    </div>
                    <div className={ownStyles.secondPair} >
                        <div className={`${ownStyles.text} ${ownStyles.aboutOrange}`}>{props.firstWord}</div>
                        <div className={`${ownStyles.text} ${ownStyles.meOrange}`}>{props.secondWord}</div>
                    </div>
                </div>
            </NavLink>
            </section>
        </>
    );
};

