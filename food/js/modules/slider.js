function slider({
	container,
	nextArrow,
	prevArrow,
	slide,
	totalCounter,
	currentCounter,
	wrapper,
	field
}) {

	const slides = document.querySelectorAll(slide),
		next = document.querySelector(nextArrow),
		prev = document.querySelector(prevArrow),
		sliderWrapper = document.querySelector(wrapper),
		sliderField = document.querySelector(field),
		slider = document.querySelector(container),
		currentSlide = document.querySelector(currentCounter),
		totalSlide = document.querySelector(totalCounter),
		width = getComputedStyle(sliderWrapper).width;
	let sliderIndex = 1,
		dotArr = [],
		offset = 0;

	sliderField.style.width = 100 * slides.length + `%`;
	slider.style.position = `relative`;
	const dotBlock = document.createElement(`ol`);
	dotBlock.classList.add(`carousel-indicators`);
	slider.append(dotBlock);

	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement(`li`);
		dot.classList.add(`dot`);
		dot.setAttribute(`dotNumber`, i + 1);
		dotBlock.append(dot);
		dotArr.push(dot);
	}

	slides.forEach(item => {
		item.style.width = width;
	});

	function insertNull() {
		if (slides.length > 9 && sliderIndex < 10) {
			totalSlide.textContent = slides.length;
			currentSlide.textContent = `0${sliderIndex}`;
		} else if (sliderIndex > 9) {
			currentSlide.textContent = sliderIndex;
		} else {
			totalSlide.textContent = `0${slides.length}`;
			currentSlide.textContent = `0${sliderIndex}`;
		}

		dotArr.forEach(item => item.style.opacity = `.5`);
		dotArr[sliderIndex - 1].style.opacity = `1`;

		sliderField.style.transform = `translateX(-${offset}px)`;
	}

	insertNull();

	next.addEventListener(`click`, () => {
		if (offset == +width.slice(0, -2) * (slides.length - 1)) {
			offset = 0;
		} else {
			offset += +width.slice(0, -2);
		}

		if (sliderIndex == slides.length) {
			sliderIndex = 1;
		} else {
			sliderIndex++;
		}

		insertNull();
	});

	prev.addEventListener(`click`, () => {
		if (offset == 0) {
			offset = +width.slice(0, -2) * (slides.length - 1);
		} else {
			offset -= +width.slice(0, -2);
		}

		if (sliderIndex == 1) {
			sliderIndex = slides.length;
		} else {
			sliderIndex--;
		}

		insertNull();
	});

	dotArr.forEach(item => {
		item.addEventListener(`click`, (e) => {
			const dotNum = e.target.getAttribute(`dotNumber`);

			sliderIndex = dotNum;
			offset = +width.slice(0, -2) * (dotNum - 1);

			insertNull();
		});
	});
}

export default slider;