(function(){
	//let  = document.querySelector('');
	let buttonToggle = document.querySelector('.main-nav__toggle');
	let mainNav = document.querySelector('.main-nav');

	function toggler(){
		if(mainNav.classList.contains('main-nav--closed')){
			mainNav.classList.remove('main-nav--closed');
			mainNav.classList.add('main-nav--opened');
		} else {
			mainNav.classList.remove('main-nav--opened');
			mainNav.classList.add('main-nav--closed');
		}
	}

	buttonToggle.addEventListener('click', toggler);



})();