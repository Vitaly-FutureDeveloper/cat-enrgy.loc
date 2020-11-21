(function () {
	/*
	Модуль валидации формы main-form
	 */

	var inputName = document.querySelector("#input-name");
	var inputWeight = document.querySelector("#input-weight");
	var inputAge = document.querySelector("#input-age");
	var inputMail = document.querySelector("#input-mail");
	var inputTel = document.querySelector("#input-tel");

	var validInputs = [inputName, inputWeight, inputAge, inputMail, inputTel];

	/*
	* Универсальная валидация форм
	* :components/validator.js
	* @param inputs {array} всех DOM input для валидации
	 */
	validatorAllInputs(validInputs);
})();