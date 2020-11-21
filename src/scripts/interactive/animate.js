(function () {

	/*
	* Константы с именами классов для анимаций
	* :Файл src/styles/blocks/animate.scss
	*/
	//Прокрутка сверху-вниз
	const ANIMATE_NEXT = 'animate';
	//Прокрутка снизу-вверх
	const ANIMATE_BACK = 'anti-animate';

	/* Теги для анимации
	* :Файл src/styles/blocks/animate.scss
	* в файле должны быть готовы css-анимации
	* При удалении селектора, должны быть удалены и в файле animate.scss
	*/
	const TAGS = 'section, p, svg, .scope-list__image-wrapper';

	var selectors = document.querySelectorAll(TAGS);

	var dealWidthScrolling = function (){
		selectors.forEach(function (item) {
			/*
			* //Проверка: true - если элемент выше чем вьюпорт
			* @param el {object} DOM элемент для проверки
			* :boolean
			*/
			if (isUnderVisible(item)){
				item.classList.add(ANIMATE_BACK);
			} else {
				item.classList.remove(ANIMATE_BACK);
			}
			/*
			* //Проверка: true - если элемент в области видимости вьюпорта
			* @param el {object} DOM элемент для проверки
			* :boolean
			*/
			if (isPartiallyVisible(item)){
				item.classList.add(ANIMATE_NEXT);
			} else {
				item.classList.remove(ANIMATE_NEXT);
			}
		});
	};

	var isPartiallyVisible = function(el){
		/*
		* //Проверка: true - если элемент в области видимости вьюпорта
		* @param el {object} DOM элемент для проверки
		* :boolean
		*/
		var elementBoudary = el.getBoundingClientRect();

		var top = elementBoudary.top;
		var bottom = elementBoudary.bottom;
		var height = elementBoudary.height;

		return ((top + height >= 0) && (height + window.innerHeight >= bottom));
	};

	var isUnderVisible = function(el){
		/*
		* //Проверка: true - если элемент выше чем вьюпорт
		* @param el {object} DOM элемент для проверки
		* :boolean
		 */
		var elementBoudary = el.getBoundingClientRect();

		var top = elementBoudary.top;
		var height = elementBoudary.height;

		return (top + height < 0);
	};


	window.addEventListener("scroll", function() {
		/*
		* //Троттлинг для событий, например скролл
		* @param {function} рабочая функция, анимация
		*/
		window.trottle(dealWidthScrolling);
	});
	window.addEventListener('DOMContentLoaded', dealWidthScrolling);

})();