#Bootstrap Message
The jQuery plugin for showing message with Bootstrap alert classes

##Usage
### Show message
```javascript
/**
 * @param {String} message The message content
 * @param {String} type The type of message. Can be `success`, `info`, `warning` and `danger`.
 * @param {Number} timeout The duration of message. Default is 3000 (ms)
 */
Msg.show(message, type, timeout);
```

### Show specified type message
```javascript
/**
 * @param {String} message The message content
 * @param {Number} timeout The duration of message (in millisecond - ms)
 */
Msg.success(message, timeout);
Msg.info(message, timeout);
Msg.warning(message, timeout);
Msg.error(message, timeout);
Msg.danger(message, timeout);
```

### Default timeout
```javascript
Msg.timeout.danger = 10 * 1000; // danger and error are same
Msg.timeout.success = 3 * 1000;
Msg.timeout.info = 5 * 1000;
Msg.timeout.warning = 5 * 1000;
```

## License
https://github.com/ducdhm/bootstrap-msg/blob/master/LICENSE.md

## Lived examples
https://rawgit.com/ducdhm/bootstrap-msg/master/examples/index.html
