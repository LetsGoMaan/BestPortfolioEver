import React from "react";
import commonStyles from "../../common/styles/commonStyles.module.css"
import {NavLink} from "react-router-dom";
import ownStyles from "./AboutMe.module.css"

export const AboutMe = () => {
    return (
        <>
            <section className={ownStyles.section}>
                <NavLink to={"/aboutMe"} >
                    <div onClick={()=> console.log("контейнер")} className={commonStyles.container}>

                    <div className={`${commonStyles.text} ${commonStyles.textWhite}`}>About</div>
                    <div className={`${commonStyles.text} ${commonStyles.textOrange}`}>About</div>

                    <div className={`${commonStyles.text} ${commonStyles.textWhiteSecond}`}>Me</div>
                    <div className={`${commonStyles.text} ${commonStyles.textOrangeSecond}`}>Me</div>

                </div>
                </NavLink>
            </section>
        </>
    );
};

