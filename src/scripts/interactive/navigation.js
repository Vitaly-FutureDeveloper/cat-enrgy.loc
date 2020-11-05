(function () {

	const LINK_ACTIVE = 'site-list__link--active';

	var mainNav = document.querySelector('.main-nav');
	var buttonToggle = document.querySelector(".main-nav__toggle");
	var listLinks = document.querySelectorAll('.site-list__link');

	buttonToggle.addEventListener('click', function () {
		mainNav.classList.toggle('main-nav--closed');
		mainNav.classList.toggle('main-nav--opened');
	});

	if(window.inPage.classList.contains('inner-page')){
		mainNav.classList.add("inner-page");

		for(let i = 0; i < listLinks.length; i++){
			listLinks[i].classList.remove(LINK_ACTIVE);
		}
		if(IN_CATALOG){
			listLinks[1].classList.add(LINK_ACTIVE);
		}
		if(IN_FORM){
			listLinks[2].classList.add(LINK_ACTIVE);
		}
	}

})();