(function navActive() {
	document.querySelectorAll('.navigation__link')
		.forEach(i => i.addEventListener('click', function() {
			let active = document.querySelector('.navigation__link_active');
			if (active) {
				active.classList.remove('navigation__link_active');
			}
			this.classList.add('navigation__link_active');
		}));
})();


function radio(element) {
	document.querySelector('.radio-item_active')
	.classList.remove('radio-item_active');
	element.classList.add('radio-item_active');
}