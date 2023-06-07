import {Navigate, Route, Routes} from "react-router-dom";
import {Home} from "../Home/Home";
import {AboutMe} from "./AboutMe/AboutMe";
import styles from "./Content.module.css"
import {GetInTouch} from "./GetInTouch/GetInTouch";
import {MyPortFolio} from "./MyPortfolio/MyPortFolio";

const Content = () => {
    return (
        <div className={styles.container}>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about_me" element={<AboutMe/>}></Route>
                <Route path="/get_in_touch" element={<GetInTouch/>}></Route>
                <Route path="/projects" element={<MyPortFolio/>}></Route>
                <Route path="*" element={<Navigate to={"/home"}/>}></Route>
            </Routes>
        </div>
    )
}

export default Content;