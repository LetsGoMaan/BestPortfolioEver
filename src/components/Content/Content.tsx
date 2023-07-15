import {Navigate, Route, Routes} from "react-router-dom";
import {Home} from "../Home/Home";
import {AboutMe} from "./AboutMe/AboutMe";
import styles from "./Content.module.css"
import {MyPortFolio} from "./MyPortfolio/MyPortFolio";
import {GetInTouch1} from "./GetInTouch/GetInTouch1";

const Content = () => {



    return (
        <div className={styles.container}>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about_me" element={<AboutMe/>}></Route>
                <Route path="/get_in_touch" element={<GetInTouch1/>}></Route>
                <Route path="/projects" element={<MyPortFolio/>}></Route>
                <Route path="*" element={<Navigate to={"/home"}/>}></Route>
            </Routes>
        </div>
    )
}

export default Content;