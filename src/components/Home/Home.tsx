import React from "react";
import {GreetingsBlock} from "./Greetings/GreetingsBlock";
import styles from "./Home.module.css"
import {NavBlock} from "./NavBlock/NavBlock";
import ownStyles from "./Home.module.css";

export const Home = () => {
    return (
        <>
            <div className={styles.container}>
                <GreetingsBlock/>
                <NavBlock firstWord={"ABOUT"} secondWord={"ME"} classNameSection={ownStyles.aboutMeSection}
                          nav={"/about_me"}/>
                <NavBlock firstWord={"GET"} secondWord={"IN TOUCH"} classNameSection={ownStyles.getInTouchSection}
                          nav={"/get_in_touch"}/>
                <NavBlock firstWord={"MY"} secondWord={"PORTFOLIO"} classNameSection={ownStyles.myPortfolioSection}
                          nav={"/projects"}/>
            </div>
        </>
    );
};

