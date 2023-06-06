import React from "react";
import Typed from "react-typed";
import ownStyles from './GreetingsBlock.module.css';

export function GreetingsBlock() {
    return (
        <section className={ownStyles.section}>
            <div className={ownStyles.firstBlockContainer}>
                <div className={`${ownStyles.topTitle} ${ownStyles.title}`}>Hi THERE! I'M</div>
                <div className={`${ownStyles.middleTitle} ${ownStyles.title}`}>ANDREY PROHOROV</div>
                <Typed
                    className={`${ownStyles.bottomTitle} ${ownStyles.title}`}
                    strings={["FRONTEND DEVELOPER"]}
                    typeSpeed={100}
                    backSpeed={100}
                    loop
                    startDelay={800}
                    backDelay={5000}
                />
            </div>
        </section>

    );
}
