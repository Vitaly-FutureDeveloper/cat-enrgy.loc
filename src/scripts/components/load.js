(function () {
window.load = function(data, onSuccess, URL){
	var xhr = new XMLHttpRequest();
	var obj = {};
	var json = {};
	xhr.responseType = 'json';

	xhr.addEventListener('readystatechange', function () {
		onSuccess(xhr);
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