import React,{ useState,useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';

import data from "./data.js";
import Carousel from "./components/Carousel/Carousel.js";
import Slide from "./components/Slide/Slide.js";

function App() {

	const [width,setWidth] = useState(window.innerWidth);
	const [x,setX] = useState(0);

	useEffect(()=>{
	    window.addEventListener("resize", () => {
	    	setWidth(window.innerWidth);
	    });
		if(width<=600){
			setX(1);
		}
		else if(width<=960){
			setX(2);
		}
		else{
			setX(3);
		}
	},[width,x]);
	
	
    return (
        <Carousel multiCard={x}>
	        {
	        	data.map((cur)=>{
	        		return(
	        			<Slide info={cur} key={cur.id}/>
	        		)
	        	})
	        }
        </Carousel>
    );
}

export default App;