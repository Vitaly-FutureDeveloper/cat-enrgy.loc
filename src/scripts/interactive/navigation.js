(function () {
	var mainNav = document.querySelector('.main-nav');
	var inPage = document.querySelector('.page-main');
	var buttonToggle = document.querySelector(".main-nav__toggle");
	var listLinks = document.querySelectorAll('.site-list__link');

	buttonToggle.addEventListener('click', function () {
		mainNav.classList.toggle('main-nav--closed');
		mainNav.classList.toggle('main-nav--opened');
	});

	if(inPage.classList.contains('inner-page')){
		mainNav.classList.add("inner-page");

		for(let i = 0; i < listLinks.length; i++){
			listLinks[i].classList.remove('site-list__link--active');
		}
		if(inPage.classList.contains('page-catalog')){
			listLinks[1].classList.add('site-list__link--active')
		}
		if(inPage.classList.contains('page-form')){
			listLinks[2].classList.add('site-list__link--active')
		}
	}
})();