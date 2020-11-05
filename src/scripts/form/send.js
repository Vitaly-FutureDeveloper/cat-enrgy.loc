(function () {

	var form = document.querySelector('.main-form');
	var URL = 'server.php';

	if(IN_FORM) {
		form.addEventListener('submit', function (evt) {
			evt.preventDefault();
			window.load(new FormData(form), window.onSuccess, URL);
			form.reset();
		});
	}

})();