import {Navigate, Route, Routes} from "react-router-dom";
import {Home} from "../Home/Home";
import {Info} from "./Info/Info";
import styles from "./Content.module.css"

const Content = () => {
    return (
        <div className={styles.container} >
            <Routes>
                <Route path="/home"     element={<Home />}></Route>
                <Route path="/aboutMe"    element={<Info/>}></Route>
                {/*<Route path="/projects" element={<Projects />}></Route>*/}
                {/*<Route path="/contact"  element={<Contact />}></Route>*/}
                <Route path="*"         element={<Navigate to={'/home'} />}></Route>
            </Routes>
        </div>
    )
}

export default Content;