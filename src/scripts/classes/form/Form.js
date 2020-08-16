class AbstractForm{

	constructor(){}

	_formValidator(){}
	formCustomValid(){}
	formSend(){}
}

class Form extends AbstractForm{

	constructor(){
		super();
		this._invalidities = [];
	}
	
	set setFormClass(classForm){
		this.form = document.querySelector("." + classForm);
	}
	set setInputNameID(IDvalue){
		this._inputName = document.querySelector("#" + IDvalue);
	}
	set setInputWeightID(IDvalue){
		this._inputWeight = document.querySelector("#" + IDvalue);
	}
	set setInputMailID(IDvalue){
		this._inputMail = document.querySelector("#" + IDvalue);
	}
	set setInputTelID(IDvalue){
		this._inputTel = document.querySelector("#" + IDvalue);
	}

	get _getInputsConstruct(){
		return [
			this._inputName, 
			this._inputWeight, 
			this._inputMail, 
			this._inputTel
		];
	}

	get getForm(){
		return this.form;
	}
	get getter(){
		console.log(this._getInputsConstruct);
	}

	_getInvalydity(){
		return this._invalidities.join(" \n");
	}

	_addInvalidity(message){
		this._invalidities.push(message);
	}

	_formValidator(input){
		let validity = input.validity;
console.log(validity);
		if(!validity.valid){
			
			if(validity.valueMissing){
				input.setCustomValidity("Поле обязательно должно быть введено");
			}
			if(validity.patternMismatch){
				input.setCustomValidity("Не правильно введены данные, ошибка шаблона");
			}
			if(validity.typeMismatch){
				input.setCustomValidity("Не правильно введено поле");
			}
			if(validity.rangeOverflow){
				let max = getAttributeValue(validInputs[i], "max");
				input.setCustomValidity("Значение не может быть больше " + max);
			}
			if(validity.rangeUnderflow){
				let min = validInputs[i].getAttributeValue("min");
				input.setCustomValidity("Значение не может быть мешьше " + min);
			}
			if(validity.tooLong){
				let many = validInputs[i].value.length;
				let big = validInputs[i].getAttribute("maxlength");
				input.setCustomValidity("Превышено максимально допустимое колличество знаков " + big + " знаков. Вы написали " + many);
			}
			if(validity.tooShort){
				let little = validInputs[i].getAttribute("minlength");
				input.setCustomValidity("Поле не может содержать меньше " + little + " знаков");
			}
			return false;
		} else {
			return true;
		}
	}

	formCustomValid(){
		var inputs = this._getInputsConstruct;
		var validityMessage = '';

		//this.getForm.addEventListener('invalid', function(evt) {
			for(let i = 0; i < inputs.length; i++){
				var input = inputs[i];

				if(!this._formValidator(input)){
					input.classList.add("input-invalid");

					validityMessage = this._getInvalydity();
					input.setCustomValidity(validityMessage);

					return false;
				} else {
					input.classList.remove("input-invalid");
				}
			}
		//});
	}
}