import React from "react";
import "./App.module.css";
import styles from "./App.module.css"
import {MyPhoto} from "./components/MyPhoto";
import {BrowserRouter} from "react-router-dom";
import Content from "./components/Content/Content";

function App() {
    return (
        <BrowserRouter>
            <div className={styles.container}>
                <MyPhoto/>
                <Content/>
            </div>
        </BrowserRouter>
    )
}

export default App;
