Bootstrap Message
========================
jQuery plugin for showing message with Bootstrap alert classes

Usage
-----
### Show message
```
/**
 * @param {String} message The message content
 * @param {String} type The type of message. Can be `success`, `info`, `warning` and `danger`.
 * @param {Number} timeout The duration of message. Default is 3000 (ms)
 */
Msg.show(message, type, timeout);
```

### Show specified type message
```
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
```
Msg.timeout.danger = 10 * 1000; // danger and error are same
Msg.timeout.success = 3 * 1000;
Msg.timeout.info = 5 * 1000;
Msg.timeout.warning = 5 * 1000;
```

License
-----
### MIT License

Copyright (c) 2014 Duc Doan Hoang Minh

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
