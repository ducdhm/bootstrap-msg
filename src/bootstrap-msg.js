import $ from 'jquery';

import TIMEOUT from './defaults/timeout';
import iconBs from './defaults/icon';
import iconFa from './defaults/iconFa';

let timer;
export default {
    ICONS: {
        BOOTSTRAP: iconBs,
        FONTAWESOME: iconFa
    },
    icon: iconFa,
    timeout: TIMEOUT,
    version: '@{version}',
    
    showMsg: function (type, message, timeout = this.timeout[type]) {
        let self = this;
        let msg = $('#msg');
        if (msg.length === 0) {
            msg = $(`
                <div id="msg">
                    <a href="#" data-dismiss="msg" class="close">&times;</a>
                    <i></i>
                    <span></span>
                </div>
            `);
            
            msg.find('[data-dismiss="msg"]').on('click', function (e) {
                e.preventDefault();
                
                self.hideMsg();
            });
            
            msg.appendTo(document.body);
        }
        
        msg.find('span').html(message);
        msg.find('i').attr('class', self.icon[type]);
        
        setTimeout(function () {
            msg.attr('class', 'alert alert-' + type + ' showed');
        }, 50);
        
        clearTimeout(timer);
        if (timeout > 0) {
            timer = setTimeout(function () {
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
};
