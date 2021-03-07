function rad(element) {
	document.querySelector('.link_active')
	.classList.remove('link_active');
	element.classList.add('link_active');
}

function redUnder(element) {
	document.querySelector('.navigation__link_active')
	.classList.remove('navigation__link_active');
	element.classList.add('navigation__link_active');
}