import { useState, useEffect } from "react";

import "./stats-counter.styles.scss";

const StatsCounter = (props) => {
    const [count, setCount] = useState(0);
    const [showCounter, setShowCounter] = useState(false);

    const counter = (minimum, maximum) => {
        for (let i = minimum; i <= maximum; i++) {
            setTimeout(() => {
                setCount(i);
            }, (i - minimum) * 100);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 1200 && !showCounter) {
                setShowCounter(true);
                counter(props.min, props.max);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [showCounter, props.min, props.max]);
    return <div>{showCounter && <div>{`${count}хил`}</div>}</div>;
};

export default StatsCounter;
