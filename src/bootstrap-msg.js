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
    
    showMsg: function (type, message, extraClass, timeout = this.timeout[type]) {
        const self = this;
        const msg = $('#msg');
        const progress = msg.find('div');
        
        extraClass = extraClass || this.extraClass;
        
        msg.find('span').html(message);
        msg.find('i').attr('class', self.icon[type]);
        msg.attr('class', `alert alert-${type} showed ${extraClass}`);
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
    
    info: function (message, extraClass, timeout) {
        this.showMsg('info', message, extraClass, timeout);
    },
    
    success: function (message, extraClass, timeout) {
        this.showMsg('success', message, extraClass, timeout);
    },
    
    warning: function (message, extraClass, timeout) {
        this.showMsg('warning', message, extraClass, timeout);
    },
    
    error: function (message, extraClass, timeout) {
        this.danger(message, extraClass, timeout);
    },
    
    danger: function (message, extraClass, timeout) {
        this.showMsg('danger', message, extraClass, timeout);
    },
    
    hideMsg: function () {
        $('#msg').removeClass('showed');
    }
    
}.init();
