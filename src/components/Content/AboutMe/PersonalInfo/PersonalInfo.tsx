import React from "react";
import ownStyles from "./PersonalInfo.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilePdf, faPenToSquare, faUser} from "@fortawesome/free-solid-svg-icons";
import men from '../../../../assets/img/men.jpg'

export const PersonalInfo = () => {
    return (
        <>
            <div className={ownStyles.containerInfo}>
                <div className={ownStyles.containerWrapper}>
                    <div className={ownStyles.aboutMePhoto}>
                        <img className={ownStyles.menPhoto} src={men} alt="men"/>
                    </div>
                    <div className={ownStyles.textContainer}>
                        <div className={ownStyles.personalInfo}>
                         <span className={ownStyles.iconUser}>
                       <FontAwesomeIcon icon={faUser}/>
                        </span>
                            <p className={ownStyles.personalDescription}>I'm a Minsk-based web developer with 1.5+ years of experience building responsive and dynamic websites using modern technologies like HTML, CSS, JavaScript, and React. I'm passionate about creating user-friendly websites with clean code and attention to detail.</p>
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
                </div>
            </div>
        </>
    );
};

