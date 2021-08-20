import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { motion } from "framer-motion";

import image from "../../images/image.JPG";
import './styles.css';

const Slide = ({info}) =>{

    return(
        <Col sm={6} md={3} style={{padding:"3%"}}>
            <motion.div whileHover={{scale: 1.1}}>
                <Card>
                    <Card.Img variant="top" src={ image } />
                    <p className={info.color}>
                        <i className='fa fa-clock-o' /> {' '}
                        {info.start}
                    </p>
                    <Card.Body>
                        <Card.Title>{info.title}</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        <p className="text">
                            <i className="fa fa-play-circle-o play" />{'  '}{info.class}<br/>
                            <i className="fa fa-bookmark-o book" />{'  '}{info.question} &nbsp;&nbsp;&nbsp;&nbsp;
                            <i className="fa fa-file-pdf-o file" />{'  '}{info.notes}   
                        </p>
                    </Card.Footer>
                </Card>
            </motion.div>
        </Col>
    );
}
export default Slide;