$(function () {
	var example = $('#example');
	switch (example.attr('data-icon')) {
		case 'fa':
			Msg.icon = Msg.ICONS.FONTAWESOME;
			break;
			
		case 'bs':
			Msg.icon = Msg.ICONS.BOOTSTRAP;
			break;
			
		default:
			Msg.icon = {
				info: 'fa fa-bath',
				success: 'fa fa-anchor',
				warning: 'fa fa-bell-o',
				danger: 'fa fa-bolt'
			};
	}
	
	$('.btn').each(function () {
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