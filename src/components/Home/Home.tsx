import React from "react";
import {GreetingsBlock} from "./Greetings/GreetingsBlock";
import styles from "./Home.module.css"
import {NavBlock} from "./NavBlock/NavBlock";
import commonStyles from "../../common/styles/commonStyles.module.css";

export const Home = () => {
    return (
        <>
            <div className={styles.container}>
                <GreetingsBlock/>
                <NavBlock firstWord={"ABOUT"} secondWord={"ME"} classNameSection={commonStyles.aboutMeSection} nav={"/about_me"}/>
                <NavBlock firstWord={"GET"} secondWord={"IN TOUCH"} classNameSection={commonStyles.getInTouchSection} nav={"/get_in_touch"}/>
                <NavBlock firstWord={"MY"} secondWord={"PORTFOLIO"} classNameSection={commonStyles.myPortfolioSection} nav={"/projects"}/>
                {/*<AboutMe/>*/}
                {/*<MyPortfolio/>*/}
                {/*<Contacts/>*/}
            </div>


        </>
    );
};

