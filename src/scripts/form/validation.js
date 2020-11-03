(function () {

	var message = {
		valueMissing : "Поле обязательно должно быть введено",
		rangeOverflow : "Значение не может быть больше ",
		rangeUnderflow : "Значение не может быть меньше ",
		tooLong : "Значение не может быть таким длинным",
		tooShort : "Значение не может быть таким коротким",
		patternMismatch : "Не правильно введены данные, ошибка шаблона",
	};
	var inputName = document.querySelector("#input-name");
	var inputWeight = document.querySelector("#input-weight");
	var inputMail = document.querySelector("#input-mail");
	var inputTel = document.querySelector("#input-tel");
	var validInputs = [inputName, inputWeight, inputMail, inputTel];

	var onValidator = function () {
		var element = document.querySelector('.new-element');
		if(element)
			element.remove();

		if(!this.checkValidity()) {
			classInvalid.add(this);

			if (this.validity.valueMissing) {
				insertElem(this, message.valueMissing);
			}
			if (this.validity.rangeOverflow) {
				var max = this.getAttribute('max');
				insertElem(this, message.rangeOverflow + max);
			}
			if (this.validity.rangeUnderflow) {
				var min = this.getAttribute('min');
				insertElem(this, message.rangeUnderflow + min);
			}
			if (this.validity.tooLong) {
				insertElem(this, message.tooLong);
			}
			if (this.validity.tooShort) {
				insertElem(this, message.tooShort);
			}
			if (this.validity.patternMismatch) {
				insertElem(this, message.patternMismatch);
			}
		} else {
			classInvalid.off(this);
		}
	};
	var classInvalid =  {
		add: (t) => {
			t.classList.add('input-invalid')
		},
		off: (t) => {
			t.classList.remove('input-invalid')
		}
	};
	var insertElem = function (here, text) {
		var leed = here.parentNode;
		var element = document.createElement('p');

		element.textContent = text;
		element.classList.add('new-element');
		element.style.cssText = 'font-size: 10px; color: red; text-transform: uppercase; position: absolute; top: 0; left:40%';

		leed.appendChild(element);
	};

	if(window.inPage.classList.contains('page-form')) {
		for (var i = 0; i < validInputs.length; i++) {
			validInputs[i].addEventListener('input', onValidator);
		}
	}

})();