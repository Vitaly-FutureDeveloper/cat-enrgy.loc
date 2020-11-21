(function () {

	window.load = function(data, onSuccess, URL){
		/*
		* Отправка AJAX запроса на сервер
		* @param data {Object} new FormData(form)
		* @param onSuccess {func} Обработка ответа от сервера при AJAX запросе
		* @param URL {string} link сервера
		 */
		var xhr = new XMLHttpRequest();
		var obj = {};
		var json = {};
		xhr.responseType = 'json';

		xhr.addEventListener('readystatechange', function () {
			/*
			* Обработка ответа от сервера при AJAX запросе
			* :components/global.js
			* @param {object}
		 */
			window.onSuccess(xhr);
		});

		xhr.open('POST', URL);
		xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

		data.forEach(function(elem, index){
			obj[index] = elem;
		});

		json = JSON.stringify(obj);
		xhr.send(json);
	};
})();