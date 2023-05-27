import React from "react";
import commonStyles from "../../../common/styles/commonStyles.module.css";
import ownStyles from "./MyPortfolio.module.css"

export const MyPortfolio = () => {
    return (
        <>
            <section className={ownStyles.section}>
                <div className={commonStyles.container}>
                    <div className={`${commonStyles.text} ${commonStyles.textWhite}`}>My</div>
                    <div className={`${commonStyles.text} ${commonStyles.textOrange}`}>My</div>

                    <div className={`${commonStyles.text} ${commonStyles.textWhiteSecond}`}>Portfolio</div>
                    <div className={`${commonStyles.text} ${commonStyles.textOrangeSecond}`}>Portfolio</div>
                </div>
            </section>
        </>
    );
};

