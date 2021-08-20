import React, { useEffect, useState } from 'react'
import { Badge, Button, Container, Row, Col } from "react-bootstrap";

import './styles.css'

const Carousel = (props) => {

    const {children, multiCard} = props;

    let data = [];
    for(let i=0;i<multiCard;i++){
        data.push(children[i]);
    }

    const [cards,setCards] = useState(data);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let data = [];
        for(let i=currentIndex*multiCard;i<currentIndex*multiCard + multiCard;i++){
            data.push(children[i]);
        }
        setCards(data);
    }, [ multiCard, children, currentIndex]);

    const next = () => {
        setCurrentIndex(prevState => (prevState + 1)%(children.length/multiCard));

        let data = [];
        for(let i=currentIndex*multiCard;i<currentIndex*multiCard + multiCard;i++){
            data.push(children[i]);
        }
        setCards(data);
    }

    const prev = () => {        
        setCurrentIndex(prevState => (prevState + 1)%(children.length/multiCard));

        let data = [];
        for(let i=currentIndex*multiCard;i<currentIndex*multiCard + multiCard;i++){
            data.push(children[i]);
        }
        setCards(data);
    }

    return (
        <Container className="m-5" fluid>
            <Row>
                <Col xs={2}>
                    <Badge className="live"> 
                        <i className="fa fa-circle dot"/>
                        &nbsp;Live 
                    </Badge> 
                </Col>
                <Col xs={6}>
                    <span className="header"> 
                        Upcoming Live Coaching
                    </span>
                </Col>
                <Col xs={2}>
                    <Button onClick={next} className="btn btn-secondary move">
                        <i className="fa fa-chevron-right" />
                    </Button>
                    <Button onClick={prev} className="btn btn-secondary move">
                        <i className="fa fa-chevron-left" />
                    </Button>
                </Col>
            </Row>
            <div className="carousel-content">
                {cards}
            </div>
        </Container>
    );
}

export default Carousel;