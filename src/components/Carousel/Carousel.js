import React, { useEffect, useState } from 'react'
import { Badge, Button, Container, Row, Col } from "react-bootstrap";

import './styles.css'

const Carousel = (props) => {

    const {children, multiCard} = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cards,setCards] = useState(null);

    useEffect(() => {
        let data = [];
        for(let i=currentIndex*multiCard;i<currentIndex*multiCard + multiCard;i++){
            data.push(children[i]);
        }
        setCards(data);
    }, [ multiCard, children, currentIndex]);

    const change = () => {
        let data = [];
        for(let i=currentIndex*multiCard;i<currentIndex*multiCard + multiCard;i++){
            data.push(children[i]);
        }
        setCards(data);
    }

    const next = () => {
        setCurrentIndex(prevState => (prevState + 1)%(children.length/multiCard));
        change();
    }

    const prev = () => {        
        setCurrentIndex(prevState => (prevState + children.length - 1)%(children.length/multiCard));
        change();
    }

    return (
        <Container fluid>
            <Row className="mx-5 mt-5">
                <Col xs={2}>
                    <Badge className="live"> 
                        <i className="fa fa-circle dot"/>
                        &nbsp;Live 
                    </Badge> 
                </Col>
                <Col xs={8}>
                    <span className="header"> 
                        Upcoming Live Coaching
                    </span>
                </Col>
                <Col xs={2}>
                    <Button onClick={prev} className="btn btn-secondary move">
                        <i className="fa fa-chevron-left" />
                    </Button>
                    <Button onClick={next} className="btn btn-secondary move">
                        <i className="fa fa-chevron-right" />
                    </Button>
                </Col>
            </Row>
            <div className="carousel-content">
                {
                    cards
                }
            </div>
        </Container>
    );
}

export default Carousel;