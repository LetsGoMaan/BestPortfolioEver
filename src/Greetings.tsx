import React from "react";
import Typed from "react-typed";
import styles from "./App.module.css"

export function Greetings() {
    return (
        <div>
            <span className={`${styles.title} ${styles.topTitle}`}>Hi THERE! I'M</span>
            <span className={`${styles.title} ${styles.middleTitle}`}>ANDREY PROHOROV</span>
            <Typed
                className={styles.bottomTitle}
                strings={["FRONTEND DEVELOPER"]}
                typeSpeed={100}
                backSpeed={100}
                loop
                startDelay={800}
                backDelay={5000}
            />
        </div>
    );
}
