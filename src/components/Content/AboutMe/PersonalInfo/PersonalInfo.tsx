import React from "react";
import ownStyles from "../AboutMe.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilePdf, faPenToSquare, faUser} from "@fortawesome/free-solid-svg-icons";

export const PersonalInfo = () => {
    return (
        <>
            <div className={ownStyles.containerInfo}>
                <div className={ownStyles.personalInfo}>
                         <span className={ownStyles.iconUser}>
                       <FontAwesomeIcon icon={faUser}/>
                        </span>
                    <p className={ownStyles.personalDescription}>I'm a Freelance Web Designer & Developer based
                        in Moscow, Russia, I have serious passion for UI effects, animations and creating
                        intuitive, with over a decade of experience.</p>
                </div>

                <div className={ownStyles.contacts}>
                    <ul className={ownStyles.contactsList}>
                        <li><span>First Name:</span> Andrey</li>
                        <li><span>Last Name:</span> Prohorov</li>
                        <li><span>Date of birth:</span> 04 november 1997</li>
                        <li><span>Nationality:</span> Belarusian</li>
                        <li><span>Status:</span> Ready to hire</li>
                    </ul>
                    <ul className={ownStyles.contactsList}>
                        <li><span>Phone:</span> +375 29 516 01 76</li>
                        <li><span>Address:</span> Minsk, Belarus</li>
                        <li><span>Email:</span> ilikeseik@gmail.com</li>
                        <li><span>Spoken Languages:</span> Russian-English</li>
                        <li><span>Telegram:</span> @LetsGoMan</li>
                    </ul>
                </div>

                <div className={ownStyles.infoButtons}>
                    <a href="#" className={ownStyles.downloadResumeButton}>
                        DOWNLOAD RESUME
                        <FontAwesomeIcon className={ownStyles.iconPdf} icon={faFilePdf}/></a>
                    <a href="#" className={ownStyles.myBlogButton}>
                        MY BLOG
                        <FontAwesomeIcon className={ownStyles.iconPetToSquare} icon={faPenToSquare}/>
                    </a>
                </div>
            </div>
        </>
    );
};

