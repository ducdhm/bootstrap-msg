$(function () {
	if ($('#msg-fa').length > 0) {
		Msg.icon = Msg.ICONS.FONTAWESOME;
	}
	
	if ($('#msg-custom').length > 0) {
		Msg.icon = {
			info: 'fa fa-bath',
			success: 'fa fa-anchor',
			warning: 'fa fa-bell-o',
			danger: 'fa fa-bolt'
		};
	}
	
	$('button').each(function () {
		var btn = $(this);
		var typeAlert = btn.attr('class').replace('btn btn-block btn-', '');
		var msgStr = 'This is ' + typeAlert + ' alert content';
		var iconMode = btn.closest('fieldset').attr('data-icon');

		btn.on('click', function (e) {
			e.preventDefault();

			Msg.iconMode = iconMode;
			Msg[typeAlert](msgStr);
		});
	});
});