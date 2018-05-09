'use strict';

import 'bootstrap';

import SmoothScroll from 'smoothscroll-for-websites';
import Slider from './slider.testimonials';
import ScrollMagic from './scrollmagic';

import 'lazysizes';

const OM = {};

OM.smoothscroll = function () {
	new SmoothScroll;
};

OM.testimonials = function () {
	Slider.testimonials();
};

OM.parallax = function () {
	ScrollMagic.parallax();
};

$(document).ready(function () {

	/**
	 * SmoothScroll
	 */

	OM.smoothscroll();

	/**
	 * Parallax
	 */

	OM.parallax();

	/**
	 * Carousel
	 */
	OM.testimonials();
});

export default OM;