class InnerPageClass extends AbstractInteractive {

	constructor(){
		super();
	}

	set setInPage(classPage){
		this.inPage = document.querySelector(classPage);
	}

	set setListLinks (classNav){
		this._listLinks = document.querySelectorAll("." + classNav);
	}

	pageToggle(){
		if(this.inPage.classList.contains("inner-page")){
			this.mainNav.classList.add("inner-page");

			if(this.inPage.classList.contains("inner-page")){
				for(let i = 0; i < this._listLinks.length; i++){
					this._listLinks[i].classList.remove("site-list__link--active");
				}
				if(this.inPage.classList.contains("page-catalog"))
					this._listLinks[1].classList.add("site-list__link--active");
				if(this.inPage.classList.contains("page-form"))
					this._listLinks[2].classList.add("site-list__link--active");
			}
		}
	}
}