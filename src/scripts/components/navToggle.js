(function(){
	let buttonToggle = document.querySelector('.main-nav__toggle');
	

	function toggler(){
		if(window.mainNav.classList.contains('main-nav--closed')){
			window.mainNav.classList.remove('main-nav--closed');
			window.mainNav.classList.add('main-nav--opened');
		} else {
			window.mainNav.classList.remove('main-nav--opened');
			window.mainNav.classList.add('main-nav--closed');
		}
	}

	buttonToggle.addEventListener('click', toggler);
})();