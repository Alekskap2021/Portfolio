import {
	closeModal,
	openModal,
} from './modalWindows';
import {
	postData
} from '../services/services';

function forms(formSelector, modalTimerId) {

	const forms = document.querySelectorAll(formSelector),
		message = {
			loading: `img/form/spinner.svg`,
			sucess: `Данные успешно отправлены`,
			failure: `Что-то пошло не так...`
		};

	forms.forEach(form => {
		bindPostData(form);
	});

	function bindPostData(form) {
		form.addEventListener(`submit`, (e) => {
			e.preventDefault();

			const formData = new FormData(form),
				statusMessage = document.createElement(`img`);

			statusMessage.src = message.loading;
			statusMessage.style.cssText = `
				display: block;
				margin: 0 auto;
			`;
			form.insertAdjacentElement(`afterend`, statusMessage);

			const json = JSON.stringify(Object.fromEntries(formData.entries()));

			postData(`http://localhost:3000/requests`, json)
				.then(response => {
					console.log(response);
					thanksModal(message.sucess);
					setTimeout(() => {
						statusMessage.remove();
					}, 2000);
				})
				.catch(() => thanksModal(message.failure))
				.finally(() => form.reset());

			statusMessage.textContent = message.loading;
		});
	}

	function thanksModal(message) {
		const thanksDiv = document.createElement(`div`),
			prevModalDialog = document.querySelector('.modal__dialog');

		prevModalDialog.classList.add(`hide`);
		openModal(`.modal`, modalTimerId);

		thanksDiv.classList.add(`modal__dialog`);
		thanksDiv.innerHTML = `
			<div class="modal__content">
				<div class="modal__close" data-close>×</div>
				<div class="modal__title">${message}</div>
			</div>
		`;

		document.querySelector('.modal').append(thanksDiv);

		setTimeout(() => {
			thanksDiv.remove();
			prevModalDialog.classList.remove(`hide`);
			prevModalDialog.classList.add(`show`);
			closeModal(`.modal`);
		}, 3000);
	}
}

export default forms;