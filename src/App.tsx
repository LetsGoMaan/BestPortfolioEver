import React from "react";
import "./App.module.css";
import styles from "./App.module.css"
import {MyPhoto} from "./components/Home/MyPhoto";
import {HashRouter} from "react-router-dom";
import Content from "./components/Content/Content";

function App() {
    return (
        <HashRouter>
            <div className={styles.container}>
                <MyPhoto/>
                <Content/>
            </div>
        </HashRouter>
    )
}

export default App;
