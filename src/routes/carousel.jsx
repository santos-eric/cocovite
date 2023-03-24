import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/carousel.sass';

const ImageCarousel = () => (
	<Carousel
		autoPlay
		infiniteLoop="True"
		width='100%'
		className="carousel"
	>
		<img
			src="/images/0.jpg"
			alt="aguachiles"
			height="619"
			width="800"
		/>
		<img
			src="/images/1.jpg"
			alt="aguachiles"
			height="619"
			width="800"
            />
		<img
			src="/images/2.jpg"
			alt="aguachiles"
			height="619"
			width="800"
            />
		<img
			src="/images/3.jpg"
			alt="aguachiles"
			height="619"
			width="800"
            />
		<img
			src="/images/4.jpg"
			alt="aguachiles"
			height="619"
			width="800"
            />
		<img
			src="/images/5.jpg"
			alt="aguachiles"
			height="619"
			width="800"
            />
	</Carousel>
);
export default ImageCarousel;
