import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';

import data from "./data.js";
import Carousel from "./components/Carousel/Carousel.js";
import Slide from "./components/Slide/Slide.js";

function App() {
	const width = window.innerWidth;

	let x = 3;
	if(width<=600){
		x = 1;
	}
	else if(width<=960){
		x = 2;
	}
	
    return (
        <Carousel multiCard={x}>
	        <Slide info={data[0]} />
	        <Slide info={data[1]} />
	        <Slide info={data[2]} />
	        <Slide info={data[3]} />
	        <Slide info={data[4]} />
	        <Slide info={data[5]} />
        </Carousel>
    );
}

export default App;
