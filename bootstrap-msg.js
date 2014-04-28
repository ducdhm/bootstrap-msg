/**
 * Bootstrap Message (bootstrap.msg) plugin v0.1
 * Copyright (c) 2014 Duc Doan Hoang Minh
 *
 * @license https://github.com/bobkhin/bootstrap.msg/blob/master/LICENSE
 *
 * Date: Mon, Apr 28th, 2014 (GTM+7)
 */
(function ($) {
	var timer;

	$(function () {
		var Msg = window.Msg = {
			info: function (message, timeout) {
				this.show(message, 'info', timeout);
			},
			error: function (message, timeout) {
				this.danger(message, timeout);
			},
			danger: function (message, timeout) {
				this.show(message, 'danger', timeout);
			},
			success: function (message, timeout) {
				this.show(message, 'success', timeout);
			},
			warning: function (message, timeout) {
				this.show(message, 'warning', timeout);
			},
			show: function (message, type, timeout) {
				var msg = $('#msg');
				var self = this;
				var iconClass = '';

				switch (type) {
					case 'info':
						iconClass = 'fa-info-circle';
						break;
					case 'danger':
						iconClass = 'fa-times-circle';
						break;
					case 'success':
						iconClass = 'fa-check-circle';
						break;
					case 'warning':
						iconClass = 'fa-exclamation-triangle';
						break;
					default:
				}

				clearTimeout(timer);
				timer = null;

				msg.find('span').html(message);
				msg.find('i').attr('class', 'fa ' + iconClass);
				msg.attr('class', 'alert alert-' + type + ' showed');

				if (timeout === undefined) {
					timeout = 3 * 1000;
				}

				if (timeout > 0) {
					timer = setTimeout(function () {
						self.hide();
					}, timeout);
				}
			},
			hide: function () {
				$('#msg').removeClass('showed');
			}
		};

		$('#msg').exist(null, function () {
			$(document.body).append(
				'<div id="msg">' +
					'<a href="#" data-dismiss="msg" class="close">&times;</a>' +
					'<i></i> ' +
					'<span></span>' +
				'</div>'
			);

			$('[data-dismiss="msg"]').on('click', function (e) {
				e.preventDefault();

				Msg.hide();
			});
		})
	});

})(jQuery);