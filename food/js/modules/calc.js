function calc() {

	const res = document.querySelector('.calculating__result span');
	let height, weight, age, sex, ratio;

	if (localStorage.getItem(`sex`)) {
		sex = localStorage.getItem(`sex`);
	} else {
		sex = `male`;
	}

	if (localStorage.getItem(`ratio`)) {
		ratio = localStorage.getItem(`ratio`);
	} else {
		ratio = 1.375;
	}

	function localStorSettings(parent, active, attribute) {
		const elems = document.querySelectorAll(parent);

		elems.forEach(elem => {
			elem.classList.remove(active);
			if (elem.getAttribute(attribute) === localStorage.getItem(attribute)) {
				elem.classList.add(active);
			}
		});
	}
	localStorSettings(`#gender div`, `calculating__choose-item_active`, `sex`);
	localStorSettings(`.calculating__choose_big div`, `calculating__choose-item_active`, `ratio`);

	function calc() {
		if (!height || !weight || !age || !sex || !ratio) {
			res.textContent = `____`;
			return;
		}

		if (sex == `female`) {
			res.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
		} else {
			res.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
		}
	}
	calc();

	function getStaticInf(parent, active) {
		const elems = document.querySelectorAll(`${parent} div`);

		elems.forEach(elem => {
			elem.addEventListener(`click`, (e) => {
				elems.forEach(elem => elem.classList.remove(active));
				e.target.classList.add(active);

				if (e.target.getAttribute(`ratio`)) {
					ratio = e.target.getAttribute(`ratio`);
					localStorage.setItem(`ratio`, e.target.getAttribute(`ratio`));
				} else {
					sex = e.target.getAttribute(`sex`);
					localStorage.setItem(`sex`, e.target.getAttribute(`sex`));
				}
				calc();
			});
		});

	}

	getStaticInf(`#gender`, `calculating__choose-item_active`);
	getStaticInf(`.calculating__choose_big`, `calculating__choose-item_active`);

	function getDynamicInf(parent) {
		const inp = document.querySelector(parent);

		inp.addEventListener(`input`, (e) => {

			if (inp.value.match(/\D/)) {
				inp.style.border = `1px solid red`;
			} else {
				inp.style.border = `none`;
			}

			switch (inp.getAttribute(`id`)) {
				case `height`:
					height = +inp.value;
					break;
				case `weight`:
					weight = +inp.value;
					break;
				case `age`:
					age = +inp.value;
					break;
			}
			calc();
		});
	}

	getDynamicInf(`#height`);
	getDynamicInf(`#weight`);
	getDynamicInf(`#age`);
}

export default calc;