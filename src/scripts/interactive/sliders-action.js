(function () {

	const CLASS_CHECK = 'set-after';
	const VIEWPORT_TABLET = 768;

	var sliderProgress = document.querySelector('.slider-progress__checker');
	var slideBefore = document.querySelector('.slider-progress__before');
	var sliderSet = document.querySelector('.slider-progress__checker-set');

	if(IN_INDEX) {
		if (window.innerWidth >= VIEWPORT_TABLET) {
			/*
			* Слайдер для tablet viewport и более
			*/

			let sliderChecker = document.querySelector('.slider-progress__checker-check');

			sliderChecker.addEventListener('mousedown', function (evt) {
				evt.preventDefault();

				var startCoord = evt.clientX;

				var onMouseUp = function (upEvt) {
					upEvt.preventDefault();
					sliderProgress.removeEventListener('mousemove', onMouseMove);
					document.removeEventListener('mouseup', onMouseUp);
				}

				var onMouseMove = function (moveEvt) {
					moveEvt.preventDefault();

					var shift = startCoord - moveEvt.clientX;
					var checkerHere = sliderChecker.offsetLeft;

					startCoord = moveEvt.clientX;

					sliderChecker.style.left = (sliderChecker.offsetLeft - shift) + 'px';
					slideBefore.style.clip = `rect(auto, ${checkerHere * 2}px, auto, auto)`;
				}

				sliderProgress.addEventListener('mousemove', function(moveEvt){
					/*
					* //Троттлинг для событий, например скролл
					* @param {function} рабочая функция
					*/
					window.trottle( onMouseMove.bind(this, moveEvt) );
				} );

				document.addEventListener('mouseup', onMouseUp);
			});
		} else {
			/*
			* Слайдер для mobile viewport
			*/
			sliderProgress.addEventListener('mousedown', function () {
				if (sliderSet.classList.contains(CLASS_CHECK)) {
					slideBefore.style.display = 'block';
					sliderSet.classList.remove(CLASS_CHECK);
				} else {
					slideBefore.style.display = 'none';
					sliderSet.classList.add(CLASS_CHECK);
				}
			});
		}
	}
})();