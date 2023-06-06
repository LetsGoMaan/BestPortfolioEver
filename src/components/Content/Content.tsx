import {Navigate, Route, Routes} from "react-router-dom";
import {Home} from "../Home/Home";
import {Info} from "./Info/Info";
import styles from "./Content.module.css"
import {GetInTouch} from "./GetInTouch/GetInTouch";
import {Projects} from "./Projects/Projects";

const Content = () => {
    return (
        <div className={styles.container}>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about_me" element={<Info/>}></Route>
                <Route path="/get_in_touch" element={<GetInTouch/>}></Route>
                <Route path="/projects" element={<Projects/>}></Route>
                <Route path="*" element={<Navigate to={"/home"}/>}></Route>
            </Routes>
        </div>
    )
}

export default Content;