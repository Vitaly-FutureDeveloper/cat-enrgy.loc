/*
Абстрактный класс Interactive для интерактивности сайта
 */

class AbstractInteractive {
	constructor(){
		this.mainNav = document.querySelector('.main-nav');
		this._buttonToggle = "";
	}

	toggler(){} //Переключатель состояний меню open/close
	innerPage(){} //Переключение страницы inner-page

	eventer(){} //Запуск событий
}