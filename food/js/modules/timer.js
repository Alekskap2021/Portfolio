function timer(selector, deadline, descrDays) {

	function timeRemaining(timeEnding) {
		const t = Date.parse(timeEnding) - Date.parse(new Date()),
			days = Math.floor(t / (1000 * 60 * 60 * 24)),
			hours = Math.floor(t / (1000 * 60 * 60) % 24),
			minutes = Math.floor(t / (1000 * 60) % 60),
			seconds = Math.floor(t / 1000 % 60);

		return {
			totalMs: t,
			days,
			hours,
			minutes,
			seconds,
		};
	}

	function setZero(num) {
		if (num >= 0 && num < 10) {
			return `0` + num;
		} else {
			return num;
		}
	}

	function dateToDescr(deadline) {
		const month = +deadline.slice(-5, -3),
			daysInDescr = document.querySelector(descrDays);
		let monthText;

		switch (month) {
			case 1:
				monthText = `января`;
				break;
			case 2:
				monthText = `февраля`;
				break;
			case 3:
				monthText = `марта`;
				break;
			case 4:
				monthText = `апреля`;
				break;
			case 5:
				monthText = `мая`;
				break;
			case 6:
				monthText = `июня`;
				break;
			case 7:
				monthText = `июля`;
				break;
			case 8:
				monthText = `августа`;
				break;
			case 9:
				monthText = `сентября`;
				break;
			case 10:
				monthText = `октября`;
				break;
			case 11:
				monthText = `ноября`;
				break;
			case 12:
				monthText = `декабря`;
		}

		daysInDescr.textContent = `${+deadline.slice(-2)} ${monthText}`;
	}

	function setTimer(selector, timeEnding) {
		const timer = document.querySelector(selector),
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds');

		let startTimerUpdate = setInterval(updateTimer, 1000);

		updateTimer();

		function updateTimer() {
			const t = timeRemaining(timeEnding);

			days.innerHTML = setZero(t.days);
			hours.innerHTML = setZero(t.hours);
			minutes.innerHTML = setZero(t.minutes);
			seconds.innerHTML = setZero(t.seconds);
			dateToDescr(deadline);

			if (t.totalMs <= 0) {
				clearInterval(startTimerUpdate);
			}
		}
	}

	setTimer(selector, deadline);
	console.log(+deadline.slice(-5, -3));
}

export default timer;