'use strict';

import 'slick-carousel';

const Slider = {};

Slider.testimonials = function () {

	const testimonial = '#o-testimonials-1 .o-block-slider';

	$(testimonial).slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true
	});
};

export default Slider;