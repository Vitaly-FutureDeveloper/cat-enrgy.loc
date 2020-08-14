(function(){
	let inPage = document.querySelector("main");
	let listLinks = document.querySelectorAll(".site-list__link");
	console.log(inPage);

	if(inPage.classList.contains("inner-page")){
		window.mainNav.classList.add("inner-page");

		if(inPage.classList.contains("page-form")){
			for(let i = 0; i < listLinks.length; i++){
				listLinks[i].classList.remove("site-list__link--active");
			}
			listLinks[2].classList.add("site-list__link--active");
		}
	}
})();
