import React from "react";
import styles from "../App.module.css";

export const Main = () => {
    return (
        <>
            <div className={styles.main}>
                {/*<section className={<styles className="section"></styles>}>*/}
                    <div className={`${styles.content} ${styles.firstBlock}`}>

                    </div>
                {/*</section>*/}

            </div>
        </>
    );
};

