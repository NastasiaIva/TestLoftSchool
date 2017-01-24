import $ from 'jquery';

$(function () {

	bind();

	function bind () {

		$('.js-checkbox').on('click', function(event){

			var coursesItem = $(this).parents('.js-course'),
				coursesList = $(this).parents('.js-courses-list');

			event.preventDefault();
			coursesItem.stop().animate({backgroundColor: '#edf5e3'}, {
				duration: 1000,
				queue:false,
				complete: function () {
					coursesItem.addClass('active').slideUp('1000');
				}
			});
			coursesItem.stop().animate({display: 'none'}, {
				duration: 100,
				queue:true,
				complete: function () {
					coursesItem.remove();
				}
			});

			if (coursesList.length === 0) {
				$('.js-section-courses').css('display', 'none');
				$('.js-last-text').css('display', 'block');
			} else {
			}

		});
	}
});
