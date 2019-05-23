# BootstrapMsg
The jQuery plugin for showing message with Bootstrap alert classes ([http://ducdhm.github.io/bootstrap-msg/](http://ducdhm.github.io/bootstrap-msg/))


## Shortcuts
 * [Dependencies](#dependencies)
 * [Methods](#methods)
 * [Default](#default)
 * [Custom Icon](#custom-icon)
 * [Extra class](#extra-class)
 * [License](#license)


## Dependencies
 * [jQuery](http://jquery.com/)
 * [Bootstrap](https://getbootstrap.com/)
 * [Fontawesome](https://fontawesome.com/)
 

## Methods
| Name        | Params (ParamType: ParamName)                          | Description                                                                                                                         |
|-------------|--------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| Msg.show    | String: type<br />String: message<br />Number: timeout | Show message. `type` can be `info`, `success`, `warning` or `danger`. If `timeout` is not set, will use [default timeout](#timeout) |
| Msg.info    | String: message<br />Number: timeout                   | Shortcut of `showMessage` with `type` is `info`                                                                                     |
| Msg.success | String: message<br />Number: timeout                   | Shortcut of `showMessage` with `type` is `success`                                                                                  |
| Msg.warning | String: message<br />Number: timeout                   | Shortcut of `showMessage` with `type` is `warning`                                                                                  |
| Msg.error   | String: message<br />Number: timeout                   | Alias of `Msg.danger`                                                                                                               |
| Msg.danger  | String: message<br />Number: timeout                   | Shortcut of `showMessage` with `type` is `danger`                                                                                   |


## Default

### Timeout
Timeout for BootstrapMsg is available at `Msg.timeout`

| Type    | Timeout (in ms) |
|---------|-----------------|
| info    | `5 * 1000`      |
| success | `5 * 1000`      |
| warning | `5 * 1000`      |
| danger  | `5 * 1000`      |

### Icon
Icon for BootstrapMsg is available at `Msg.icon`

| Type    | Class                      |
|---------|----------------------------|
| info    | `fa fa-info-circle`        |
| success | `fa fa-check-circle`       |
| warning | `fa fa-exclamation-circle` |
| danger  | `fa fa-times-circle`       |


## Custom Icon
If you want to custom icon for BootstrapMsg, you just need to specify icon class for each message type. Example:
```javascript
Msg.icon = {    
    info: 'fa fa-bath',
    success: 'fa fa-anchor',
    warning: 'fa fa-bell-o',
    danger: 'fa fa-bolt'  
};
```

### Using Bootstrap Icon
We already define a Bootstrap icon set for BootstrapMsg at `Msg.ICON.BOOTSTRAP`. For using this icon set, just need `Msg.icon = Msg.ICONS.BOOTSTRAP;`

### Hide icon
If you do not want to show icon in BootstrapMsg, you can set `Msg.iconEnabled = false;`


## Extra class
If you want to add extra class to BootstrapMsg element, just change `Msg.extraClass` for default extra class


## License
Please read at [here](LICENSE.md)
