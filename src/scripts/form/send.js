(function () {

	var form = document.querySelector('.main-form');
	var URL = 'server.php';

	if(IN_FORM) {
		form.addEventListener('submit', function (evt) {
			evt.preventDefault();
			/*
			* Отправка AJAX запроса на сервер
			* :components/load.js
			* @param data {Object} new FormData(form)
			* @param onSuccess {func} Обработка ответа от сервера при AJAX запросе
			* @param URL {string} link сервера
			 */
			window.load(new FormData(form), window.onSuccess, URL);

			form.reset();
		});
	}

})();