import React, {useState} from "react";
// import ownStyles from "./GetInTouch.module.css";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faComments, faEnvelope, faEnvelopeOpen, faHome, faPaperPlane, faPhone} from "@fortawesome/free-solid-svg-icons";
// import {Title} from "../../common/Title/Title";
// import {SocialIcon} from "react-social-icons";
// import {SubmitHandler, useForm} from "react-hook-form";
// import {TextField} from "@mui/material";
// import {GoBack} from "../../common/GoBack/GoBack";
//
// type FormType = {
//     email: string,
//     yourName: string,
//     yourComment: string
// }
//
//
// export const GetInTouch = () => {
//
//     const {
//         register,
//         formState: {
//             errors,
//             isValid
//         },
//         handleSubmit,
//         reset
//     } = useForm<FormType>({
//             mode: "onBlur"
//         }
//     );
//     const onSubmit: SubmitHandler<FormType> = (data) => {
//         console.log(data);
//         reset()
//     }
//     console.log(errors);
//
//     const [isInputActive, setIsInputActive] = useState({yourName: false, email: false, yourComment: false});
//
//     const handleYourNameInputFocus = () => {
//         setIsInputActive({
//             yourName: true,
//             email: false,
//             yourComment: false
//         });
//     };
//     const handleYourEmailInputFocus = () => {
//         setIsInputActive({
//             yourName: false,
//             email: true,
//             yourComment: false
//         });
//     };
//     const handleYourCommentInputFocus = () => {
//         setIsInputActive({
//             yourName: false,
//             email: false,
//             yourComment: true
//         });
//     };
//
//     const handleInputBlur = () => {
//         setIsInputActive({
//             yourName: false,
//             email: false,
//             yourComment: false
//         });
//     };
//
//
//     return (
//
//         <section>
//             <div className={ownStyles.getInTouchContainer}>
//                 <GoBack/>
//                 <Title icon={<FontAwesomeIcon icon={faEnvelopeOpen}/>} firstWord={"GET"} secondWord={"IN TOUCH"}/>
//                 <div className={ownStyles.getInTouchWrapper}>
//                     <div className={ownStyles.contactsAndSocials}>
//                         <h6 className={ownStyles.subTitle}>PHONE</h6>
//                         <span className={ownStyles.iconAndInfo}>
//                             <FontAwesomeIcon icon={faPhone} className={ownStyles.icon}/>
//                             +34 62 11 84 01
//                         </span>
//                         <h6 className={ownStyles.subTitle}>EMAIL</h6>
//                         <span className={ownStyles.iconAndInfo}>
//                             <FontAwesomeIcon icon={faEnvelope} className={ownStyles.icon}/>
//                             ilikeseik@gmail.com
//                         </span>
//                         <h6 className={ownStyles.subTitle}>TELEGRAM</h6>
//                         <span className={ownStyles.iconAndInfo}>
//                             <FontAwesomeIcon icon={faPaperPlane} className={ownStyles.icon}/>
//                             @LetsGoMan
//                         </span>
//                         <h6 className={ownStyles.subTitle}>ADDRESS</h6>
//                         <span className={ownStyles.iconAndInfo}>
//                             <FontAwesomeIcon icon={faHome} className={ownStyles.icon}/>
//                             Belarus, Minsk
//                         </span>
//                         <h6 className={ownStyles.subTitle}>SOCIAL PROFILES</h6>
//                         <div className={ownStyles.socialWrapper}>
//                             <SocialIcon url="https://telegram.com/" style={{width: "35px", height: "35px"}}
//                                         fgColor={"white"}/>
//                             <SocialIcon url="https://github.com/" style={{width: "35px", height: "35px"}}
//                                         bgColor={"#333"} fgColor={"white"}/>
//                             <SocialIcon url="https://email.com/" style={{width: "35px", height: "35px"}} bgColor={"red"}
//                                         fgColor={"white"}/>
//                             <SocialIcon url="https://linkedin.com/" style={{width: "35px", height: "35px"}}
//                                         fgColor={"white"}/>
//                             {/*<FontAwesomeIcon icon={faGooglePlus} style={{color: "red",}} */}
//                             {/*                 className={ownStyles.socialIcon}/>*/}
//                         </div>
//                     </div>
//                     <div className={ownStyles.formContainer}>
//                         <h6 className={ownStyles.formTitle}>
//                             FEEL FREE TO DROP ME A LINE
//                         </h6>
//                         <p className={ownStyles.formText}>
//                             If you have any suggestion, project or even you want to say Hello. Please fill out the form
//                             below and I will reply you shortly.
//                         </p>
//
//                         <form className={ownStyles.form} onSubmit={handleSubmit(onSubmit)}>
//
//                             <div className={ownStyles.textField}>
//                                 <FontAwesomeIcon icon={faPaperPlane} className={ isInputActive.yourName ? ownStyles.inputActiveIcon : ownStyles.inputIcon}/>
//                                 <TextField
//
//                                     {...register("yourName", {
//                                         required: "Поле обязательно к заполнению!",
//                                         maxLength: {
//                                             value: 80,
//                                             message: "Максимум 80 символов"
//                                         },
//                                         minLength: {
//                                             value: 3,
//                                             message: "Минимум 3 символа"
//                                         }
//                                     })}
//
//
//                                     variant={"standard"}
//                                     label={"Your Name"}
//                                     autoComplete={"off"}
//                                     sx={{
//                                         color: "white",
//                                         borderBottom: "1px solid #666",
//
//                                     }}
//                                     InputProps={{
//                                         style: {
//                                             color: "white"
//                                         },
//                                         disableUnderline: true,
//                                         onFocus: handleYourNameInputFocus,
//                                         onBlur: handleInputBlur
//                                     }}
//                                     InputLabelProps={{
//                                         style: {
//                                             color: "white"
//                                         },}}
//                                 />
//                             </div>
//                             <div className={ownStyles.inputError}>
//                                 {errors?.yourName && <p>{errors?.yourName?.message || "Error!"}</p>}
//                             </div>
//
//                             <div className={ownStyles.textField}>
//                                 <FontAwesomeIcon icon={faEnvelope}   className={ isInputActive.email ? ownStyles.inputActiveIcon : ownStyles.inputIcon}/>
//                                 <TextField
//
//                                     {...register("email", {
//                                         required: "Поле обязательно к заполнению!",
//                                         pattern: /^\S+@\S+$/i,
//                                         maxLength: {
//                                             value: 80,
//                                             message: "Максимум 80 символов"
//                                         },
//                                         minLength: {
//                                             value: 3,
//                                             message: "Минимум 3 символа"
//                                         }
//                                     })}
//
//
//                                     variant={"standard"}
//                                     label={"Your Email"}
//                                     autoComplete={"off"}
//                                     sx={{
//                                         color: "white",
//                                         borderBottom: "1px solid #666",
//                                         maxWidth: "600px"
//                                     }}
//                                     InputProps={{
//                                         style: {
//                                             color: "white"
//                                         },
//                                         disableUnderline: true,
//                                         onFocus: handleYourEmailInputFocus,
//                                         onBlur: handleInputBlur
//                                     }}
//                                     InputLabelProps={{
//                                         style: {
//                                             color: "white"
//                                         },
//                                     }}/>
//                             </div>
//                             <div className={ownStyles.inputError}>
//                                 {errors?.yourName && <p>{errors?.yourName?.message || "Error!"}</p>}
//                             </div>
//
//                             <div className={ownStyles.textField}>
//                                 <FontAwesomeIcon icon={faComments} className={ isInputActive.yourComment ? ownStyles.inputActiveIcon : ownStyles.inputIcon}/>
//                                 <TextField
//
//                                     {...register("yourComment", {
//                                         required: "Поле обязательно к заполнению!",
//                                         maxLength: {
//                                             value: 80,
//                                             message: "Максимум 80 символов"
//                                         },
//                                         minLength: {
//                                             value: 3,
//                                             message: "Минимум 3 символа"
//                                         }
//                                     })}
//
//
//                                     variant={"standard"}
//                                     label={"Your Comment"}
//                                     autoComplete={"off"}
//                                     sx={{
//                                         color: "white",
//                                         borderBottom: "1px solid #666",
//                                         width: "360px"
//                                     }}
//                                     InputProps={{
//                                         style: {
//                                             color: "white"
//                                         },
//                                         disableUnderline: true,
//                                         onFocus: handleYourCommentInputFocus,
//                                         onBlur: handleInputBlur
//                                     }}
//                                     InputLabelProps={{
//                                         style: {
//                                             color: "white"
//                                         },
//                                     }}/>
//                             </div>
//                             <div className={ownStyles.inputError}>
//
//                                 {errors?.yourName && <p>{errors?.yourName?.message || "Error!"}</p>}
//                             </div>
//
//                             <button className={ownStyles.formSubmitButton} disabled={!isValid}>
//                                 SEND MESSAGE
//                                 <FontAwesomeIcon icon={faPaperPlane} className={ownStyles.sendButtonIcon}/>
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//
//         </section>
//     );
// };
//
//
//
