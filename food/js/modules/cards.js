import {
	getResourses
} from '../services/services';

function cards() {

	class MenuCard {
		constructor(src, alt, title, descr, price, parent, ...classes) {
			this.src = src;
			this.alt = alt;
			this.title = title;
			this.descr = descr;
			this.price = price;
			this.classes = classes.length ? classes : [`menu__item`];
			this.parent = document.querySelector(parent);
		}

		render() {
			const cardElem = document.createElement(`div`);
			this.classes.forEach(className => cardElem.classList.add(className));
			cardElem.innerHTML = `
				<img src = ${this.src} alt = ${this.alt}/>

				<h3 class = "menu__item-subtitle"> ${this.title} </h3> 

				<div class = "menu__item-descr">${this.descr}</div>

				 <div class = "menu__item-divider"></div> 

				 <div class = "menu__item-price">
					<div class = "menu__item-cost"> Цена: </div>
					<div class = "menu__item-total"> <span> ${this.price} </span> грн/день </div> 
				 </div> `;

			this.parent.append(cardElem);
		}
	}

	getResourses(`http://localhost:3000/menu`)
		.then(data => {
			data.forEach(({
				img,
				altimg,
				title,
				descr,
				price
			}) => {
				new MenuCard(img, altimg, title, descr, price, `.menu .container`).render();
			});
		});
}

export default cards;