/**
 * Bootstrap Message (bootstrap.msg) plugin v0.3
 * Copyright (c) 2014 Duc Doan Hoang Minh
 *
 * @license https://github.com/bobkhin/bootstrap.msg/blob/master/LICENSE
 *
 * Date: Wed, May 14th, 2014 (GTM+7)
 */
(function ($, window) {
	var timer;

	var Msg = window.Msg = {
		iconMode: 'bs',
		timeout: {
			danger: 10 * 1000,
			success: 3 * 1000,
			info: 5 * 1000,
			warning: 5 * 1000
		},
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
			var self = this;

			var msg = $('#msg');
			var dontHaveMsg = false;
			if (!msg[0]) {
				dontHaveMsg = true;
				msg = $(
					'<div id="msg">' +
						'<a href="#" data-dismiss="msg" class="close">&times;</a>' +
						'<i></i> ' +
						'<span></span>' +
					'</div>'
				);

				msg.find('[data-dismiss="msg"]').on('click', function (e) {
					e.preventDefault();

					self.hide();
				});

				msg.appendTo(document.body);
			}


			var iconClass = '';

			switch (type) {
				case 'info':
					iconClass = self.iconMode === 'bs' ? 'glyphicon glyphicon-info-sign' : 'fa fa-info-circle';
					break;
				case 'danger':
					iconClass = self.iconMode === 'bs' ? 'glyphicon glyphicon-remove-sign' : 'fa fa-times-circle';
					break;
				case 'success':
					iconClass = self.iconMode === 'bs' ? 'glyphicon glyphicon-ok-sign' : 'fa fa-check-circle';
					break;
				case 'warning':
					iconClass = self.iconMode === 'bs' ? 'glyphicon glyphicon-warning-sign' : 'fa fa-exclamation-triangle';
					break;
				default:
			}

			clearTimeout(timer);
			timer = null;

			msg.find('span').html(message);
			msg.find('i').attr('class', iconClass);
			if (dontHaveMsg) {
				setTimeout(function () {
					msg.attr('class', 'alert alert-' + type + ' showed');
				}, 50);
			} else {				
				msg.attr('class', 'alert alert-' + type + ' showed');
			}
			

			if (timeout === undefined) {
				timeout = Msg.timeout[type];
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

})(jQuery, window);