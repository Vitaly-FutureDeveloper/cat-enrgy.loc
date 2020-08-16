
/*
let classForm = new Form;
classForm.setFormClass = "main-form";
classForm.setInputNameID = "input-name";
classForm.setInputWeightID = "input-weight";
classForm.setInputMailID = "input-mail";
classForm.setInputTelID = "input-tel";
classForm.formCustomValid();

let myForm = classForm.getForm;
myForm.addEventListener('submit', function(evt) {
	evt.preventDefault();
	classForm.formCustomValid();
});
*/

//отладчик
//classForm.getter;


//Не получается сделать в ООП Временно в процедурном стиле
(function(){

let form = document.querySelector(".main-form");
let inputName = document.querySelector("#input-name");
let inputWeight = document.querySelector("#input-weight");
let inputMail = document.querySelector("#input-mail");
let inputTel = document.querySelector("#input-tel");
let validInputs = [inputName, inputWeight, inputMail, inputTel];

for(let i = 0; i < validInputs.length; i++){
	validInputs[i].addEventListener('invalid', function(){
		let validity = validInputs[i].validity;
		if(validity.valueMissing){
				validInputs[i].setCustomValidity("Поле обязательно должно быть введено");
			}
			if(validity.patternMismatch){
				validInputs[i].setCustomValidity("Не правильно введены данные, ошибка шаблона");
			}
			if(validity.typeMismatch){
				validInputs[i].setCustomValidity("Не правильно введено поле");
			}
			if(validity.rangeOverflow){
				let max = getAttributeValue(validInputs[i], "max");
				validInputs[i].setCustomValidity("Значение не может быть больше " + max);
			}
			if(validity.rangeUnderflow){
				let min = validInputs[i].getAttributeValue("min");
				validInputs[i].setCustomValidity("Значение не может быть мешьше " + min);
			}
			if(validity.tooLong){
				let many = validInputs[i].value.length;
				let big = validInputs[i].getAttribute("maxlength");
				validInputs[i].setCustomValidity("Превышено максимально допустимое колличество знаков " + big + " знаков. Вы написали " + many);
			}
			if(validity.tooShort){
				let little = validInputs[i].getAttribute("minlength");
				validInputs[i].setCustomValidity("Поле не может содержать меньше " + little + " знаков");
			}
	});
}

form.addEventListener('submit', function(evt){
	evt.preventDefault();

	let messages = {
		loading: 'Загрузка...',
		success: 'Спасибо, скоро мы с вами свяжемся',
		fail: 'Ошибка, попробуйте снова'
	};
	let snippetBlock = document.querySelector('.snippet-loading');
	let textBlock = document.querySelector('.snippet-loading__text');
	let request = new XMLHttpRequest();
	let formData = new FormData(form);
	let obj = {};
	let json = {};

	request.timeout = 5000;

	request.open('POST', 'server.php');
	request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
	
	formData.forEach( function(element, index) {
		obj[index] = element;
	});

	json = JSON.stringify(obj);
	request.send(json);

	request.addEventListener('readystatechange', function(){
		if(request.readyState < 4){
			textBlock.innerHTML = messages.loading;
			snippetBlock.style.display = 'block';
		} else if(request.readyState === 4 && request.status == 200) {
			textBlock.innerHTML = messages.success;
			textBlock.style.color = 'green';
			setTimeout(() => {snippetBlock.style.display = 'none';}, 4000);
		} else {
			textBlock.innerHTML = messages.fail;
			textBlock.style.color = 'red';
			setTimeout(() => {snippetBlock.style.display = 'none';}, 4000);
		}
	});
});

})();