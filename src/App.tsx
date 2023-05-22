import React, {useState} from "react";
import "./App.module.css";
import styles from "./App.module.css"
import {Greetings} from "./Greetings";
import SwapWords from "./SwapWords";


function App() {
    const [words, setWords] = useState(["ABOUT", "ME"]);
    const [swap, setSwap] = useState(false);

    const handleMouseEnter = () => {
        setWords([words[1], words[0]]);
        setSwap(true);
    };

    const handleMouseLeave = () => {
        setWords(["ABOUT", "ME"]);
        setSwap(false);
    };
    return (
        <>
            <div className={styles.container}>
                <div className={styles.photo}></div>
                <div className={styles.main}>
                    <section className={styles.section}>
                        <div className={`${styles.content} ${styles.firstBlock}`}>
                            <Greetings/>
                        </div>
                    </section>
                    <section className={styles.section}>
                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={styles.content}>
                            {/*<Flipper flipKey={words.join("-")}>*/}
                            {/*    <span>*/}
                            {/*<Flipped flipId="word1">*/}
                            {/*    <span>{words[0]}</span>*/}
                            {/*</Flipped>{" "}<Flipped flipId="word2">*/}
                            {/*    <span>{words[1]}</span>*/}
                            {/*</Flipped>*/}
                            {/*    </span>*/}
                            {/*</Flipper>*/}




      {/*                      <Flipper flipKey={words.join("-")}>*/}
      {/*<span className={styles.swapWords} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>*/}
      {/*  <Flipped flipId="word1">*/}
      {/*    <span className={`${styles.word} ${swap ? styles.wordUp : styles.wordDown}`}>{words[1]}</span>*/}
      {/*  </Flipped>*/}
      {/*  <Flipped flipId="word2">*/}
      {/*    <span className={`${styles.word} ${swap ? styles.wordDown : styles.wordUp}`}>{words[0]}</span>*/}
      {/*  </Flipped>*/}
      {/*</span>*/}
      {/*                      </Flipper>*/}

                    <SwapWords word1={"About"} word2={"Me"}/>

                        </div>
                    </section>
                    <section className={styles.section}>
                        <div className={styles.content}>
                            MY PORTFOLIO


                        </div>
                    </section>
                    <section className={styles.section}>
                        <div className={styles.content}>GET IN TOUCH</div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default App;
