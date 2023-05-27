import React from "react";
import commonStyles from "../../../common/styles/commonStyles.module.css";
import ownStyles from './Contacts.module.css'

export const Contacts = () => {
    return (
        <>
            <section className={ownStyles.section}>
                <div className={commonStyles.container}>
                    <div className={`${commonStyles.text} ${commonStyles.textWhite}`}>Get</div>
                    <div className={`${commonStyles.text} ${commonStyles.textOrange}`}>Get</div>

                    <div className={`${commonStyles.text} ${commonStyles.textWhiteSecond}`}>IN TOUCH</div>
                    <div className={`${commonStyles.text} ${commonStyles.textOrangeSecond}`}>IN TOUCH</div>
                </div>
            </section>
        </>
    );
};

