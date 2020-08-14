class AbstractForm{
	formValidator(){}
	formSend(){}
}

class Form extends AbstractForm{
	set setFormClass(classForm){
		this.form = document.querySelector("." + classForm);
	}

	get getter(){
		console.log(this.form);
	}

	_formValidator(){
		let inputName = document.querySelector("#input-name");
		let inputWeight = document.querySelector("#input-weight");
		let inputMail = document.querySelector("#input-mail");
		let inputTel = document.querySelector("#input-tel");
	}
}