function crumbActive(element) {
	document.querySelector('.link_active')
	.classList.remove('link_active');
	element.classList.add('link_active');
}

function redUnder(element) {
	let active = document.querySelector('.navigation__link_active');
	if(active) {
		active.classList.remove('navigation__link_active');
	}
	element.classList.add('navigation__link_active');
}

function triangleActive(element) {
	let active = document.querySelector('.triangle_active');
	if(active) {
		active.classList.remove('triangle_active');
	}
	element.classList.add('triangle_active');
}