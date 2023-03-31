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
		<img
			src="/images/0.webp"
			alt="aguachiles"
			height="619"
			width="800"
		/>
		<img
			src="/images/1.webp"
			alt="aguachiles"
			height="619"
			width="800"
            />
		<img
			src="/images/2.webp"
			alt="aguachiles"
			height="619"
			width="800"
            />
		<img
			src="/images/3.webp"
			alt="aguachiles"
			height="619"
			width="800"
            />
		<img
			src="/images/4.webp"
			alt="aguachiles"
			height="619"
			width="800"
            />
		<img
			src="/images/5.webp"
			alt="aguachiles"
			height="619"
			width="800"
            />
	</Carousel>
);
export default ImageCarousel;
