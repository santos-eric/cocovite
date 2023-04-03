import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/carousel.sass';

const ImageCarousel = () => (
	<Carousel
		autoPlay
		infiniteLoop="True"
		className="carousel"
	>
		<img src="/images/2.webp" alt=""/>
		<img src="/images/4.webp" alt=""/>
		<img src="/images/5.webp" alt=""/>
		<img src="/images/10.webp" alt=""/>
		<img src="/images/12.webp" alt=""/>
		<img src="/images/13.webp" alt=""/>
		<img src="/images/14.webp" alt=""/>
	</Carousel>
);
export default ImageCarousel;
