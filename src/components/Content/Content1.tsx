import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import {Home} from "../Home/Home";
import styles from "./Content.module.css"
import {MyPortFolio} from "./MyPortfolio/MyPortFolio";
import {GetInTouch1} from "./GetInTouch/GetInTouch1";
import ownStyles from "./AboutMe/AboutMe.module.css";
import {CSSTransition} from "react-transition-group";
import {useState} from "react";
import {AboutMe} from "./AboutMe/AboutMe";

const Content = () => {

    const [isEnter, setIsEnter] = useState(true)
    console.log(isEnter)
    const navigate = useNavigate();
    const onClickHandler = () => {
        debugger
        setIsEnter((v) => !v)
        setTimeout(() => {
            navigate(-1)
        }, 750)

    }

    const routes = [
        {path: "about_me", Component: AboutMe},
        {path: "get_in_touch", Component: GetInTouch1},
        {path: "projects", Component: MyPortFolio}
    ]


    return (
        <div className={styles.container}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                {routes.map(({path, Component}) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <CSSTransition
                                in={isEnter}
                                timeout={5000}
                                classNames={{
                                    appear: ownStyles.myclassAppear,
                                    appearActive: ownStyles.myclassAppearActive,
                                    appearDone: ownStyles.myclassAppearDone,
                                    enter: ownStyles.myclassEnter,
                                    enterActive: ownStyles.myclassEnterActive,
                                    enterDone: ownStyles.myclassEnterDone,
                                    exit: ownStyles.myclassExit,
                                    exitActive: ownStyles.myclassExitActive,
                                    exitDone: ownStyles.myclassExitDone,
                                }}
                                appear={true}
                                mountOnEnter
                                unmountOnExit
                            >
                                <Component/>
                            </CSSTransition>
                        }
                    />
                ))}
                <Route path="*" element={<Navigate to="/home"/>}/>
            </Routes>
        </div>
    )
}

export default Content;