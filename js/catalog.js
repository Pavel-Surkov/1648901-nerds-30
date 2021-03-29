document.querySelectorAll('.navigation__link')
.forEach( i => i.addEventListener('click', function() {
	let active = document.querySelector('.navigation__link_active');
	if(active) {
		active.classList.remove('navigation__link_active');
	}
	this.classList.add('navigation__link_active');
}));

function crumbActive(element) {
	document.querySelector('.link_active')
	.classList.remove('link_active');
	element.classList.add('link_active');
}

function triangleActive(element) {
	let active = document.querySelector('.triangle_active');
	if(active) {
		active.classList.remove('triangle_active');
	}
	element.classList.add('triangle_active');
}

function radio(element) {
	document.querySelector('.radio-item_active')
	.classList.remove('radio-item_active');
	element.classList.add('radio-item_active');
}

function checkbox(element) {
	element.classList.toggle('checkbox-item_active');
}

(function blockUp() {
	let cards = document.querySelectorAll('.cards__item');
	let blocks = document.querySelectorAll('.cards__underblock');
	let headers = document.querySelectorAll('.cards__item__header');
	for(let i = 0; i < cards.length; i++) {
		cards[i].addEventListener('mouseover', function() {
			blocks[i].classList.add('cards__underblock_active');
			headers[i].classList.add('cards__item__header_active');
		});
		cards[i].addEventListener('mouseout', function() {
			blocks[i].classList.remove('cards__underblock_active');
			headers[i].classList.remove('cards__item__header_active');
		})
	}
})();

(function heightSize() {
	let cardsItem = document.querySelectorAll('.cards__item');
	let cardsContainer = document.querySelectorAll('.cards__container');
	let width = cardsContainer[0].offsetWidth;
	for(let i = 0; i < cardsContainer.length; i++) {
		cardsContainer[i].style.height = `${width * 1.61}px`;
		cardsItem[i].style.height = `${width * 1.61 + 40}px`;
	}
})();