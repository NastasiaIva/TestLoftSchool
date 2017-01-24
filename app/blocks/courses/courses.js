import $ from 'jquery';

$(function () {

	function bind() {

		$('.js-checkbox').on('click', function (event) {
			var
				_this = $(this),
				coursesItem = _this.parents('.js-course'),
				coursesSection = _this.parents('.js-section-courses'),
				lastText = coursesSection.siblings('.js-last-text');

			event.preventDefault();

			coursesItem
				.addClass('active')
				.animate({backgroundColor: '#edf5e3'}, 1000, "linear",
					function() {

						if (coursesItem.siblings().length) {

							coursesItem.slideUp('1000').remove();

						}else {
							coursesSection.remove();
							lastText.css('display', 'block');

						}
					}
			);
		});
	}

	bind();
});
