import React from "react";
import "./App.module.css";
import styles from "./App.module.css"
import {MyPhoto} from "./components/Home/MyPhoto";
import {HashRouter} from "react-router-dom";
import Content from "./components/Content/Content";

function App() {
    const projects = ['/img/project-1.jpg', '/img/project-2.jpg', '/img/project-3.jpg', '/img/project-4.jpg',
        '/img/project-5.jpg', '/img/project-6.jpg', '/img/project-7.jpg', '/img/project-8.jpg', '/img/project-9.jpg'];
    return (
        <HashRouter>
            <div className={styles.container}>
                {projects.map((project) => {
                    return <img src={process.env.PUBLIC_URL+project} aria-hidden style={{display: 'none'}} key={project} />
                })}
                <MyPhoto/>
                <Content/>
            </div>
        </HashRouter>
    )
}

export default App;
