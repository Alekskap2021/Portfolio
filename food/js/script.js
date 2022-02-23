"use strict";

import tabs from './modules/tabs';
import forms from './modules/forms';
import slider from './modules/slider';
import calc from './modules/calc';
import cards from './modules/cards';
import timer from './modules/timer';
import modalWindows from './modules/modalWindows';
import {
	openModal
} from './modules/modalWindows';


window.addEventListener(`DOMContentLoaded`, (e) => {
	e.preventDefault();

	const modalTimerId = setTimeout(() => openModal(`.modal`, modalTimerId), 7000);

	tabs('.tabheader__item', '.tabheader', '.tabcontent', `tabheader__item_active`);
	forms('form', modalTimerId);
	slider({
		nextArrow: '.offer__slider-next',
		prevArrow: '.offer__slider-prev',
		slide: '.offer__slide',
		wrapper: '.offer__slider-wrapper',
		field: '.offer__slider-inner',
		container: '.offer__slider',
		currentCounter: '#current',
		totalCounter: '#total'
	});
	calc();
	cards();
	timer(`.timer`, `2022-03-02`, '#timerDateEnding');
	modalWindows('[data-modal]', '.modal', modalTimerId);

});