(function () {

	var sliderProgress = document.querySelector('.slider-progress__checker');
	var slideBefore = document.querySelector('.slider-progress__before');
	var sliderSet = document.querySelector('.slider-progress__checker-set');

	if(window.innerWidth >= 768) {
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

			sliderProgress.addEventListener('mousemove', onMouseMove);
			document.addEventListener('mouseup', onMouseUp);
		});
	} else {
		sliderProgress.addEventListener('click', function (evt) {
			if(sliderSet.classList.contains('set-after')) {
				slideBefore.style.display = 'block';
				sliderSet.classList.remove('set-after');
			} else {
				slideBefore.style.display = 'none';
				sliderSet.classList.add('set-after');
			}
		});
	}

})();