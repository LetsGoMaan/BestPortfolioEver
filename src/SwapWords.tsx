import React, { useState } from 'react';
import './SwapWords.css';

const SwapWords = (props: any) => {
    const [hover, setHover] = useState(false);

    return (
        <div
            className="swap-words"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <span className={`word ${hover ? 'move-down' : ''}`}>{props.word1}</span>
            <span className={`word ${hover ? 'move-up' : ''}`}>{props.word2}</span>
        </div>
    );
};

export default SwapWords;