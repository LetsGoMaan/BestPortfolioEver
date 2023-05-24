import React from "react";
import {Greetings} from "../Greetings/Greetings";
import {AboutMe} from "../AboutMe/AboutMe";
import {MyPortfolio} from "../MyPortfolio/MyPortfolio";
import {Contacts} from "../Contacts/Contacts";
import styles from './Home.module.css'

export const Home = () => {
    return (
        <>
            <div className={styles.container}>
                <Greetings/>
                <AboutMe/>
                <MyPortfolio/>
                <Contacts/>
            </div>


        </>
    );
};

