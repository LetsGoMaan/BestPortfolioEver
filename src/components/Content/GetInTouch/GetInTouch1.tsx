import React, {ChangeEvent, FormEvent, useState} from "react";
import ownStyles from "./GetInTouch1.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComments, faEnvelope, faEnvelopeOpen, faHome, faPaperPlane, faPhone} from "@fortawesome/free-solid-svg-icons";
import {Title} from "../../common/Title/Title";
import {SocialIcon} from "react-social-icons";
import {TextField} from "@mui/material";
import {GoBack} from "../../common/GoBack/GoBack";
import {useNavigate} from "react-router-dom";
import {CSSTransition} from "react-transition-group";
import commonStyles from "../../common/commonStyles.module.css"
import axios from "axios";

type InitialStateType = {
    email: boolean,
    yourName: boolean,
    yourComment: boolean
}


export const GetInTouch1 = () => {

    const [stateForm, setStateForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    console.log(stateForm)

    const handleChange = (event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setStateForm({
            ...stateForm,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            console.log(stateForm)
            await axios.post('https://nodejs-node-mailer.vercel.app/send-email', stateForm, {headers: {
                    'Content-Type': 'application/json'
                }});
            console.log("успех")
        } catch (error) {
            console.log('ошибка')
            console.log(error);
        }
            // axios.post('https://nodejs-node-mailer.vercel.app/send-email', stateForm)
            //     .then(() => {
            //         console.log('your message has been sent')
            //     })
    };

    const [isEnter, setIsEnter] = useState(true)
    const navigate = useNavigate();
    const onClickHandler = () => {
        setIsEnter((v) => !v)
        setTimeout(() => {
            navigate(-1)
        }, 750)

    }

    // const submitHandler = (e:FormEvent<HTMLButtonElement>) => {
    //     e.preventDefault()
    //
    //         axios.post("http://localhost:3010/send-email")
    //             .then(() => {
    //                 alert('Your message in on the way')
    //             })
    //
    //     console.log('yolo')
    // }


    const [isInputActive, setIsInputActive] = useState({yourName: false, email: false, yourComment: false});

    const handleActiveInput = (activeInput: InitialStateType) => {
        setIsInputActive(activeInput);
    };

    const handleInputBlur = () => {
        setIsInputActive({
            yourName: false,
            email: false,
            yourComment: false
        });
    };



    return (
        <>
            <CSSTransition
                in={isEnter}
                timeout={750}
                classNames={{
                    appear: commonStyles.myclassAppear,
                    appearActive: commonStyles.myclassAppearActive,
                    appearDone: commonStyles.myclassAppearDone,
                    enter: commonStyles.myclassEnter,
                    enterActive: commonStyles.myclassEnterActive,
                    enterDone: commonStyles.myclassEnterDone,
                    exit: commonStyles.myclassExit,
                    exitActive: commonStyles.myclassExitActive,
                    exitDone: commonStyles.myclassExitDone
                }}
                appear={true}
                mountOnEnter
                unmountOnExit>
                <section>
                    <div className={ownStyles.getInTouchContainer}>
                        <GoBack onClickHandler={onClickHandler}/>
                        <Title icon={<FontAwesomeIcon icon={faEnvelopeOpen}/>} firstWord={"GET"} secondWord={"IN TOUCH"}/>
                        <div className={ownStyles.getInTouchWrapper}>
                            <div className={ownStyles.contactsAndSocials}>
                                <h6 className={ownStyles.subTitle}>PHONE</h6>
                                <span className={ownStyles.iconAndInfo}>
                            <FontAwesomeIcon icon={faPhone} className={ownStyles.icon}/>
                            +375 29 516 01 76
                        </span>
                                <h6 className={ownStyles.subTitle}>EMAIL</h6>
                                <span className={ownStyles.iconAndInfo}>
                            <FontAwesomeIcon icon={faEnvelope} className={ownStyles.icon}/>
                            ilikeseik@gmail.com
                        </span>
                                <h6 className={ownStyles.subTitle}>TELEGRAM</h6>
                                <span className={ownStyles.iconAndInfo}>
                            <FontAwesomeIcon icon={faPaperPlane} className={ownStyles.icon}/>
                            @LetsGoMan
                        </span>
                                <h6 className={ownStyles.subTitle}>ADDRESS</h6>
                                <span className={ownStyles.iconAndInfo}>
                            <FontAwesomeIcon icon={faHome} className={ownStyles.icon}/>
                            Belarus, Minsk
                        </span>
                                <h6 className={ownStyles.subTitle}>SOCIAL PROFILES</h6>
                                <div className={ownStyles.socialWrapper}>
                                    <SocialIcon url="https://t.me/LetsGoMan" style={{width: "35px", height: "35px"}}
                                                fgColor={"white"}/>
                                    <SocialIcon url="https://github.com/LetsGoMaan" style={{width: "35px", height: "35px"}}
                                                bgColor={"#333"} fgColor={"white"}/>
                                    <SocialIcon url="mailto:example@gmail.com" style={{width: "35px", height: "35px"}}
                                                bgColor={"red"}
                                                fgColor={"white"}/>
                                    <SocialIcon url="https://www.linkedin.com/in/letsgoman/"
                                                style={{width: "35px", height: "35px"}}
                                                fgColor={"white"}/>
                                </div>
                            </div>
                            <div className={ownStyles.formContainer}>
                                <h6 className={ownStyles.formTitle}>
                                    FEEL FREE TO DROP ME A LINE
                                </h6>
                                <p className={ownStyles.formText}>
                                    If you have any suggestion, project or even you want to say Hello. Please fill out the form
                                    below and I will reply you shortly.
                                </p>

                                <form onSubmit={handleSubmit} className={ownStyles.form}>

                                    <div className={ownStyles.textField}>
                                        <FontAwesomeIcon icon={faPaperPlane}
                                                         className={isInputActive.yourName ? ownStyles.inputActiveIcon : ownStyles.inputIcon}/>
                                        <TextField
                                            type={"text"}
                                            name={"name"}
                                            value={stateForm.name}
                                            onChange={handleChange}
                                            variant={"standard"}
                                            label={"Your Name"}
                                            autoComplete={"off"}
                                            required
                                            sx={{
                                                color: "white",
                                                borderBottom: "1px solid #666",
                                                width: "100%",
                                                marginRight: "25px",
                                            }}
                                            InputProps={{
                                                style: {
                                                    color: "white"
                                                },
                                                disableUnderline: true,
                                                onFocus: (() =>handleActiveInput({
                                                    yourName: true,
                                                    email: false,
                                                    yourComment: false
                                                })),
                                                onBlur: handleInputBlur,
                                            }}
                                            InputLabelProps={{
                                                style: {
                                                    color: "white"
                                                },
                                            }}
                                        />
                                    </div>

                                    <div className={ownStyles.textField}>
                                        <FontAwesomeIcon icon={faEnvelope}
                                                         className={isInputActive.email ? ownStyles.inputActiveIcon : ownStyles.inputIcon}/>
                                        <TextField
                                            type={"email"}
                                            name={"email"}
                                            value={stateForm.email}
                                            onChange={handleChange}
                                            variant={"standard"}
                                            label={"Your Email"}
                                            autoComplete={"off"}
                                            required
                                            sx={{
                                                color: "white",
                                                borderBottom: "1px solid #666",
                                                width: "100%",
                                                marginRight: "25px"
                                            }}
                                            InputProps={{
                                                style: {
                                                    color: "white"
                                                },
                                                disableUnderline: true,
                                                onFocus: (() => handleActiveInput({
                                                    yourName: false,
                                                    email: true,
                                                    yourComment: false
                                                })),
                                                onBlur: handleInputBlur
                                            }}
                                            InputLabelProps={{
                                                style: {
                                                    color: "white"
                                                },
                                            }}/>
                                    </div>

                                    <div className={ownStyles.textField}>
                                        <FontAwesomeIcon icon={faComments}
                                                         className={isInputActive.yourComment ? ownStyles.inputActiveIcon : ownStyles.inputIcon}/>
                                        <TextField
                                            name={"message"}
                                            value={stateForm.message}
                                            onChange={handleChange}
                                            required
                                            variant={"standard"}
                                            label={"Your Comment"}
                                            autoComplete={"off"}

                                            sx={{
                                                color: "white",
                                                borderBottom: "1px solid #666",
                                                width: "100%",
                                                marginRight: "25px"
                                            }}
                                            InputProps={{
                                                style: {
                                                    color: "white"
                                                },
                                                disableUnderline: true,
                                                onFocus: (() =>handleActiveInput({
                                                    yourName: false,
                                                    email: false,
                                                    yourComment: true
                                                })),
                                                onBlur: handleInputBlur
                                            }}
                                            InputLabelProps={{
                                                style: {
                                                    color: "white"
                                                },
                                            }}/>
                                    </div>

                                    <button className={ownStyles.formSubmitButton}>
                                        SEND MESSAGE
                                        <FontAwesomeIcon icon={faPaperPlane} className={ownStyles.sendButtonIcon}/>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                </section>
            </CSSTransition>
        </>

    );
};



