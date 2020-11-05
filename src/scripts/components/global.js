'use strict';

window.inPage = document.querySelector('.page-main');

const IN_INDEX = window.inPage.classList.contains('page-index');
const IN_FORM = window.inPage.classList.contains('page-form');
const IN_CATALOG = window.inPage.classList.contains('page-catalog');

window.onError = function (message) {
	console.error(message);
};

window.onSuccess = function (xhr) {
	var message = {
		loading: "Загрузка",
		success: "Спасибо, мы скоро с Вами свяжемся",
		fail: "Загрузка не удалась, попробуйте ещё или свяжитесь со службой поддержки"
	};

	var snippetBlock = document.querySelector('.snippet-loading');
	var snippetText = document.querySelector('.snippet-loading__info');

	var snippetPopupHandler = {
		on: () =>	snippetBlock.style.display = 'block',
		off: () => snippetBlock.style.display = 'none'
	};

	snippetPopupHandler.on();
	snippetBlock.addEventListener('click', snippetPopupHandler.off );

	if(xhr.readyState < 4){
		snippetText.innerHTML = message.loading;
	} else if(xhr.readyState === 4 && xhr.status == 200){
		snippetText.innerHTML = message.success;
		snippetText.style.color = '#68b738';
	} else {
		snippetText.innerHTML = message.fail;
		snippetText.style.color = '#ff8282';
		window.onError(xhr);
	}
};

