var validatorAllInputs = function (inputs) {
	/**
	* Универсальная валидация форм
	* @param inputs {array} всех DOM input для валидации
	 */

	var message = {
		valueMissing : "Поле обязательно должно быть введено",
		rangeOverflow : "Значение не может быть больше ",
		rangeUnderflow : "Значение не может быть меньше ",
		tooLong : "Значение не может быть таким длинным",
		tooShort : "Значение не может быть таким коротким",
		patternMismatch : "Не правильно введены данные, ошибка шаблона",
	};

	var onValidator = function () {
		/*
		* Проверка input на валидность по событию
		 */
		var element = document.querySelector('.new-element');
		if(element)
			element.remove();

		if(!this.checkValidity()) {
			toggleClassInvalid.add(this);

			if (this.validity.valueMissing) {
				/*
				* Показ DOM элемента при невалидном поле
				* @param here {Object} DOM элемент input на котором произошло событие Invalid
				* @param text {String} Текст выводимого сообщения
				* :void
				 */
				insertElem(this, message.valueMissing);
			}
			if (this.validity.rangeOverflow) {
				var max = this.getAttribute('max');
				/*
				* Показ DOM элемента при невалидном поле
				* @param here {Object} DOM элемент input на котором произошло событие Invalid
				* @param text {String} Текст выводимого сообщения
				* :void
				 */
				insertElem(this, message.rangeOverflow + max);
			}
			if (this.validity.rangeUnderflow) {
				var min = this.getAttribute('min');
				/*
				* Показ DOM элемента при невалидном поле
				* @param here {Object} DOM элемент input на котором произошло событие Invalid
				* @param text {String} Текст выводимого сообщения
				* :void
				 */
				insertElem(this, message.rangeUnderflow + min);
			}
			if (this.validity.tooLong) {
				/*
				* Показ DOM элемента при невалидном поле
				* @param here {Object} DOM элемент input на котором произошло событие Invalid
				* @param text {String} Текст выводимого сообщения
				* :void
				 */
				insertElem(this, message.tooLong);
			}
			if (this.validity.tooShort) {
				/*
				* Показ DOM элемента при невалидном поле
				* @param here {Object} DOM элемент input на котором произошло событие Invalid
				* @param text {String} Текст выводимого сообщения
				* :void
				 */
				insertElem(this, message.tooShort);
			}
			if (this.validity.patternMismatch) {
				/*
				* Показ DOM элемента при невалидном поле
				* @param here {Object} DOM элемент input на котором произошло событие Invalid
				* @param text {String} Текст выводимого сообщения
				* :void
				 */
				insertElem(this, message.patternMismatch);
			}
		} else {
			toggleClassInvalid.off(this);
		}
	};

	var toggleClassInvalid =  {
		/*
		* Class
		* @param t {Object} DOM элемент input на котором произошло событие Invalid
		* @return add {Method} Добавляет класс '.input-invalid' DOM элементу input
		* @return off {Method} Удаляет класс '.input-invalid'
		 */
		add: (t) => {
			t.classList.add('input-invalid')
		},
		off: (t) => {
			t.classList.remove('input-invalid')
		}
	};

	var insertElem = function (here, text) {
		/*
		* Показ DOM элемента при невалидном поле
		* @param here {Object} DOM элемент input на котором произошло событие Invalid
		* @param text {String} Текст выводимого сообщения
		* :void
		 */
		const STYLE_TEXT = 'font-size: 10px; color: red; text-transform: uppercase; position: absolute; top: -50%; left:20%; z-index:500; opacity:1;';
		var leed = here.parentNode;
		var element = document.createElement('p');

		element.textContent = text;
		element.classList.add('new-element');
		element.style.cssText = STYLE_TEXT;

		leed.appendChild(element);
		console.log(leed);
	};

	if(IN_FORM) {
		for (var i = 0; i < inputs.length; i++) {
			inputs[i].addEventListener('input', onValidator);
		}
	}
};