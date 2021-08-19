import React, { useEffect, useState } from 'react'
import { Badge, Button } from "react-bootstrap";
import './styles.css'

const Carousel = (props) => {
    const {children, multiCard} = props;

    const [currentIndex, setCurrentIndex] = useState(multiCard);
    const [length, setLength] = useState(children.length);
    
    const [isRepeating, setIsRepeating] = useState(children.length > multiCard);
    const [transitionEnabled, setTransitionEnabled] = useState(true);

    useEffect(() => {
        setLength(children.length);
        setIsRepeating(children.length > multiCard);
    }, [children, multiCard]);

    useEffect(() => {
        if (isRepeating) {
            if (currentIndex === multiCard || currentIndex === length) {
                setTransitionEnabled(true);
            }
        }
    }, [currentIndex, isRepeating, multiCard, length]);

    const next = () => {
        if (isRepeating || currentIndex < (length - multiCard)) {
            setCurrentIndex(prevState => (prevState + multiCard));
        }
    }

    const prev = () => {
        if (isRepeating || currentIndex > 0) {
            setCurrentIndex(prevState => (prevState - multiCard));
        }
    }

    const handleTransitionEnd = () => {
        if (isRepeating) {
            if (currentIndex === 0) {
                setTransitionEnabled(false);
                setCurrentIndex(length);
            } else if (currentIndex === length + multiCard) {
                setTransitionEnabled(false);
                setCurrentIndex(multiCard);
            }
        }
    }

    const renderExtraPrev = () => {
        let output = [];
        for (let index = 0; index < multiCard; index++) {
            output.push(children[length - 1 - index]);
        }
        output.reverse();
        return output;
    }

    const renderExtraNext = () => {
        let output = [];
        for (let index = 0; index < multiCard; index++) {
            output.push(children[index]);
        }
        return output;
    }

    return (
        <>
            <div className="m-5">
                <Badge className="live"> 
                    <i className="fa fa-circle dot"/>
                    &nbsp;Live 
                </Badge> &nbsp;
                <span className="header"> Upcoming Live Coaching </span>
                <Button onClick={next} className="btn btn-secondary move">
                    <i className="fa fa-chevron-right" />
                </Button>
                <Button onClick={prev} className="btn btn-secondary move">
                    <i className="fa fa-chevron-left" />
                </Button>
            </div>
            <div className="carousel-wrapper">
                <div
                    className="carousel-content"
                    style={{
                        transform: `translateX(-${currentIndex * (100 / multiCard)}%)`,
                        transition: !transitionEnabled ? 'none' : undefined,
                    }}
                    onTransitionEnd={() => handleTransitionEnd()}
                >
                    { (length > multiCard && isRepeating) && renderExtraPrev() }
                    {children}
                    { (length > multiCard && isRepeating) && renderExtraNext() }
                </div>
            </div>
        </>
    );
}

export default Carousel;