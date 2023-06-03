import React from "react";
import commonStyles from "../../../common/styles/commonStyles.module.css";
import ownStyles from './Contacts.module.css'
import {NavLink} from "react-router-dom";

export const Contacts = () => {
    return (
        <>
            <section className={ownStyles.section}>
                <NavLink to={"/get_in_touch"} >
                <div className={commonStyles.container}>
                    <div className={`${commonStyles.text} ${commonStyles.textWhite}`}>Get</div>
                    <div className={`${commonStyles.text} ${commonStyles.textOrange}`}>Get</div>

                    <div className={`${commonStyles.text} ${commonStyles.textWhiteSecond}`}>IN TOUCH</div>
                    <div className={`${commonStyles.text} ${commonStyles.textOrangeSecond}`}>IN TOUCH</div>
                </div>
                </NavLink>
            </section>
        </>
    );
};

