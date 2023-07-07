import React from "react";
import Typed from "react-typed";
import ownStyles from './GreetingsBlock.module.css';

type PropsType = {
    classNameSection: string
}

export function GreetingsBlock({classNameSection}:PropsType) {
    return (
        <section className={classNameSection}>
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
