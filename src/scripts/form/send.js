(function () {

	var form = document.querySelector('.main-form');
	var URL = 'server.php';

	form.addEventListener('submit', function (evt) {
		evt.preventDefault();
		window.load(new FormData(form), onSuccess, URL);
		form.reset();
	});

})();