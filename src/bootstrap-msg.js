import $ from 'jquery';

import TIMEOUT from './defaults/timeout';
import iconBs from './defaults/icon';
import iconFa from './defaults/iconFa';

export default {
    ICONS: {
        BOOTSTRAP: iconBs,
        FONTAWESOME: iconFa
    },
    icon: iconFa,
    iconEnabled: true,
    timeout: TIMEOUT,
    version: '@{version}',
    timer: null,
    extraClass: '',
    
    init: function () {
        const self = this;
        const msg = $(`
            <div id="msg">
                <a href="#" data-dismiss="msg" class="close">&times;</a>
                <i></i>
                <span></span>
                <div class="msg-progress"></div>
            </div>
        `);
        
        msg.find('[data-dismiss="msg"]').on('click', function (e) {
            e.preventDefault();
            
            self.hideMsg();
        });
        
        msg.appendTo(document.body);
        
        return self;
    },
    
    showMsg: function (type, message, timeout = this.timeout[type]) {
        const self = this;
        const msg = $('#msg');
        const progress = msg.find('div');
        
        msg.find('span').html(message);
        msg.find('i').attr('class', self.icon[type]);
        msg.attr('class', `alert alert-${type} showed ${self.extraClass} ${self.iconEnabled ? '' : 'alert-no-icon'}`);
        progress.attr('class', `alert alert-${type} msg-progress`).css('width', 0);
        
        clearTimeout(this.timer);
        if (timeout > 0) {
            progress.stop().animate({
                width: '100%'
            }, timeout);
            this.timer = setTimeout(function () {
                self.hideMsg();
            }, timeout);
        }
    },
    
    info: function (message, timeout) {
        this.showMsg('info', message, timeout);
    },
    
    success: function (message, timeout) {
        this.showMsg('success', message, timeout);
    },
    
    warning: function (message, timeout) {
        this.showMsg('warning', message, timeout);
    },
    
    error: function (message, timeout) {
        this.danger(message, timeout);
    },
    
    danger: function (message, timeout) {
        this.showMsg('danger', message, timeout);
    },
    
    hideMsg: function () {
        $('#msg').removeClass('showed');
    }
    
}.init();
