window.addEventListener(`DOMContentLoaded`, (e) => {
	e.preventDefault();

	//fixed menu animation
	function setMenuAnimation() {
		const clientW = document.documentElement.clientWidth,
			menuW = +window.getComputedStyle(document.querySelector('.menu')).width.slice(0, -2);

		window.addEventListener(`scroll`, () => {
			if (window.pageYOffset > 0) {
				document.querySelector('.menu').style.setProperty(`--transform-menu-divider`, `scaleX(${(clientW / menuW).toFixed(3)})`);
			} else {
				document.querySelector('.menu').style.setProperty(`--transform-menu-divider`, `scaleX(1)`);
			}
		});
	}

	setMenuAnimation();
	//

	//function for get sections height
	//maybe change on getBoundingClientRect()?
	function getHeightStyle(elem) {

		const h = +window.getComputedStyle(document.querySelector(elem)).height.slice(0, -2),
			pt = +window.getComputedStyle(document.querySelector(elem)).paddingTop.slice(0, -2),
			pb = +window.getComputedStyle(document.querySelector(elem)).paddingBottom.slice(0, -2),
			mt = +window.getComputedStyle(document.querySelector(elem)).marginTop.slice(0, -2),
			mb = +window.getComputedStyle(document.querySelector(elem)).marginBottom.slice(0, -2);

		return (h + pt + pb + mt + mb);
	}
	//

	//padding for anchor-link
	document.querySelector('html').style.scrollPaddingTop = `${(getHeightStyle('.menu') - 1)}px`;
	//

	//function for change menu-item styles
	window.addEventListener(`scroll`, () => {
		function changeMenuItem() {
			const fixedMenuH = getHeightStyle(`.menu`),
				footerH = getHeightStyle(`footer`),
				scrollTop = window.pageYOffset,
				clientH = document.documentElement.clientHeight,
				scrollH = document.documentElement.scrollHeight,
				sections = document.querySelectorAll('section');
			// console.log(footerH);


			sections.forEach(section => {
				if (section.getBoundingClientRect().y - fixedMenuH <= 0 || clientH + scrollTop >= scrollH - footerH) {
					document.querySelectorAll('.nav-menu a').forEach(link => {
						link.classList.remove(`active`);
						if (section.getAttribute(`id`) == link.getAttribute(`data`)) {
							link.classList.add(`active`);
						}
					});
				}
			});
		}
		changeMenuItem();
	});

	//constructor to quickly add and change skills cards
	function skills() {
		class skillsCard {
			constructor(logoSrc, logoAlt, imgDescr, parent) {
				this.logoSrc = logoSrc;
				this.logoAlt = logoAlt;
				this.imgDescr = imgDescr;
				this.parent = document.querySelector(parent);
			}

			render(count) { //count is the number of stars under the cards
				const skillsItem = document.createElement(`div`),
					stars = document.createElement(`div`);
				skillsItem.classList.add(`skills-item`);
				stars.classList.add(`skills-item-stars`);

				skillsItem.innerHTML = `
					<img src=${this.logoSrc} alt=${this.logoAlt} class="skills-item-img"/>
					<div class="skills-item-descr"> ${this.imgDescr} </div>
				`;

				for (let i = 1; i <= 5; i++) {
					if (i <= count) {
						stars.innerHTML += `
						<img src="img/icons/Star-black.png" alt="star-black" class="star"/>
					`;
					} else {
						stars.innerHTML += `
						<img src="img/icons/Star-grey.png" alt="star-grey" class="star"/>
						`;
					}
				}

				skillsItem.append(stars);
				this.parent.append(skillsItem);
			}
		}

		new skillsCard("img/icons/jsps.png", "JS", "JavaScript", ".skills .skills-wrapper").render(3);
		new skillsCard("img/icons/reactps.png", "React", "React JS", ".skills .skills-wrapper").render(0);
		new skillsCard("img/icons/htmlps.png", "html", "HTML", ".skills .skills-wrapper").render(4);
		new skillsCard("img/icons/cssps.png", "cssps", "CSS", ".skills .skills-wrapper").render(4);
	}
	skills();

	//change language
	function langActive() {
		const langBtn = document.querySelectorAll('.lang span');

		langBtn.forEach(btn => {
			btn.addEventListener(`click`, (e) => {
				if (!e.target.classList.contains(`active`)) {
					if (e.target.classList.contains(`eng`)) {
						document.location.href = 'index-eng.html';
					} else {
						document.location.href = 'index.html';
					}
				}
			});
		});
	}
	langActive();
	//

	//Mobile-burger
	document.querySelector('.mobile-burger').addEventListener(`click`, () => {
		document.querySelector('.mobile-burger').classList.toggle(`mobile-active`);
		document.querySelector('.menu').classList.toggle(`mobile-active`);
	});
	//
});