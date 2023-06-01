import React, {useState} from "react";
import ownStyles from "./Info.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAddressCard,
    faBriefcase, faCalendar,
    faFilePdf,
    faGraduationCap, faHandshake, faHeart,
    faPenToSquare, faStar,
    faUser
} from "@fortawesome/free-solid-svg-icons";

export const Info = () => {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    const activeButton = `${ownStyles.resumeButton} ${isActive ? ownStyles.active : ""}`
    return (
        <>
            <section>
                <div className={ownStyles.info}>
                    <h2 className={ownStyles.title}>
                        <span className={ownStyles.firstWord}>About</span>
                        <span className={ownStyles.secondWord}>me</span>
                    </h2>
                    <div className={ownStyles.containerInfo}>

                        <div className={ownStyles.dividerBlock}>
                            <div className={ownStyles.divider}></div>
                            <span>
                        <FontAwesomeIcon icon={faAddressCard} className={ownStyles.iconAddressCard}/>
                    </span>
                            <div className={ownStyles.divider}></div>
                        </div>

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
                                <li><span>Date of birth:</span> 21 june 1990</li>
                                <li><span>Nationality:</span> Belarusian</li>
                                <li><span>Status:</span> Ready to hire</li>
                            </ul>
                            <ul className={ownStyles.contactsList}>
                                <li><span>Phone:</span> +375 29 516 01 76</li>
                                <li><span>Address:</span> Minsk, Belarus</li>
                                <li><span>Email:</span> ilikeseik@gmail.com</li>
                                <li><span>Spoken Langages:</span> Russian-English</li>
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

                <div className={ownStyles.resumeContainer}>
                    <div className={ownStyles.resumeWrapper}>
                        <div className={ownStyles.resumeButtons}>
                            <div onClick={handleClick} className={activeButton}>
                                <FontAwesomeIcon icon={faBriefcase} className={ownStyles.resumeIcons}/>
                                EXPERIENCE
                            </div>
                            <div onClick={handleClick} className={activeButton}>
                                <FontAwesomeIcon icon={faGraduationCap} className={ownStyles.resumeIcons}/>
                                EDUCATION
                            </div>
                            <div onClick={handleClick} className={activeButton}>
                                <FontAwesomeIcon icon={faStar} className={ownStyles.resumeIcons}/>
                                SKILLS
                            </div>
                        </div>
                    </div>
                    <div className={ownStyles.cardsWrapper}>

                        <div className={ownStyles.card}>
                            <div className={ownStyles.cardHeader}>
                                <FontAwesomeIcon icon={faBriefcase} className={ownStyles.resumeIcons}/>
                                EXPERIENCE
                            </div>
                            <div className={ownStyles.cardBody}>
                                <div>
                                    <h6 className={ownStyles.cardSubtitle}><span>WEB DESIGNER - </span>ENVATO</h6>
                                    <span className={ownStyles.date}>
                                            <FontAwesomeIcon icon={faCalendar} className={ownStyles.dateIcon}/>
                                             2015 - 2023
                                        </span>
                                    <p className={ownStyles.cardText}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci
                                        sit amet mi ullamcorper
                                    </p>
                                </div>
                                <div className={ownStyles.cardBodyDivider}></div>
                                <div>
                                    <h6 className={ownStyles.cardSubtitle}><span>WEB DESIGNER - </span>ENVATO</h6>
                                    <span className={ownStyles.date}>
                                            <FontAwesomeIcon icon={faCalendar} className={ownStyles.dateIcon}/>
                                             2015 - 2023
                                        </span>
                                    <p className={ownStyles.cardText}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci
                                        sit amet mi ullamcorper
                                    </p>
                                </div>
                                <div className={ownStyles.cardBodyDivider}></div>
                                <div>
                                    <h6 className={ownStyles.cardSubtitle}><span>WEB DESIGNER - </span>ENVATO</h6>
                                    <span className={ownStyles.date}>
                                            <FontAwesomeIcon icon={faCalendar} className={ownStyles.dateIcon}/>
                                             2015 - 2023
                                        </span>
                                    <p className={ownStyles.cardText}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci
                                        sit amet mi ullamcorper
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div></div>
                        <div></div>

                    </div>
                </div>

                <div className={ownStyles.containerBadges}>
                    <div className={ownStyles.badgeWrapper}>
                        <FontAwesomeIcon icon={faBriefcase} className={ownStyles.badgeIcon}/>
                        <span className={ownStyles.badgeText}>4+</span>
                        <h6 className={ownStyles.badgeTitle}>Years Expirience</h6>
                    </div>
                    <div className={ownStyles.badgeWrapper}>
                        <FontAwesomeIcon icon={faHandshake} className={ownStyles.badgeIcon}/>
                        <span className={ownStyles.badgeText}>10+</span>
                        <h6 className={ownStyles.badgeTitle}>DONE PROJECTS</h6>
                    </div>
                    <div className={ownStyles.badgeWrapper}>
                        <FontAwesomeIcon icon={faHeart} className={ownStyles.badgeIcon}/>
                        <span className={ownStyles.badgeText}>77+</span>
                        <h6 className={ownStyles.badgeTitle}>HAPPY CUSTOMERS</h6>
                    </div>
                </div>
            </section>
        </>
    );
};

