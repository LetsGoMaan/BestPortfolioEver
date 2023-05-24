import React from "react";
import ownStyles from './Info.module.css'
export const Info = () => {
    return (
        <>
            <section className={ownStyles.info}>
                    <h2 className={ownStyles.title}>
                        <span className={ownStyles.firstWord}>About</span>
                        <span className={ownStyles.secondWord}>me</span>
                    </h2>
                    <div>

                    </div>
            </section>
        </>
    );
};

