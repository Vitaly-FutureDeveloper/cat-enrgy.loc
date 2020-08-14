class NavClass extends AbstractInteractive {

	constructor(){
		super();
	}

	set setButtonToggle (classButton){
		this._buttonToggle = document.querySelector("." + classButton);
	}

	_toggler(){
		if(this.mainNav.classList.contains('main-nav--closed')){
			this.mainNav.classList.remove('main-nav--closed');
			this.mainNav.classList.add('main-nav--opened');
		} else {
			this.mainNav.classList.remove('main-nav--opened');
			this.mainNav.classList.add('main-nav--closed');
		}
	}

	eventer(){
		this._buttonToggle.addEventListener('click', this._toggler.bind(this));
	}
}