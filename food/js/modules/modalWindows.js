	function closeModal(modalWindow) {
		const modalWindowShow = document.querySelector(modalWindow);

		modalWindowShow.classList.add(`hide`);
		modalWindowShow.classList.remove(`show`);
		document.body.style.overflow = ``;
	}

	function openModal(modalWindow, modalTimerId) {
		const modalWindowShow = document.querySelector(modalWindow);

		modalWindowShow.classList.add(`show`);
		modalWindowShow.classList.remove(`hide`);
		document.body.style.overflow = `hidden`;

		if (modalTimerId) {
			clearInterval(modalTimerId);
		}
	}

	function modalWindow(openModalBtn, modalWindow, modalTimerId) {

		const modalBtn = document.querySelectorAll(openModalBtn),
			modalWindowShow = document.querySelector(modalWindow);

		function showModalByScroll() {
			if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 2) {
				openModal(modalWindow, modalTimerId);
				window.removeEventListener(`scroll`, showModalByScroll);
			}
		}

		modalBtn.forEach(item => {
			item.addEventListener(`click`, () => openModal(modalWindow, modalTimerId));
		});

		modalWindowShow.addEventListener(`click`, (e) => {
			if (modalWindowShow === e.target || e.target.getAttribute(`data-close`) == ``) {
				console.log(e.target.getAttribute(`data-close`));
				closeModal(modalWindow);
			}
		});

		document.addEventListener(`keydown`, (e) => {
			if (e.code === `Escape` && modalWindowShow.classList.contains(`show`)) {
				closeModal(modalWindow);
			}
		});

		window.addEventListener(`scroll`, showModalByScroll);
	}

	export default modalWindow;
	export {
		closeModal,
		openModal
	};