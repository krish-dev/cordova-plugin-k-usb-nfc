var exec = require('cordova/exec');
/**
 * @name KUsbNfc
 * @description This plugin is responsible to communicate with ACS ACR122U NFC reader device
 * @author Krishnendu Sekhar Das
 */
function KUsbNfc() { }

KUsbNfc.prototype.connect = function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'KUsbNfc', 'connect', []);
};

KUsbNfc.prototype.disconnect = function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'KUsbNfc', 'disconnect', []);
};

module.exports = new KUsbNfc();