(function ($) {
	$(function () {
		var msgStr = 'This is Bootstrap Message alert!';

		$('button').each(function () {
			var btn = $(this);
			var typeAlert = btn.attr('class').replace('btn btn-', '');
			var iconMode = btn.closest('fieldset').attr('data-icon');

			btn.on('click', function (e) {
				e.preventDefault();

				Msg.iconMode = iconMode;
				Msg[typeAlert](msgStr);
			});
		});
	});

})(jQuery);