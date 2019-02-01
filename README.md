# USB CCID NFC Reader Cordova plugin
Cordova plugin to communication with USB CCID NFC Reader via USB (OTG).

## Platform Support
* android

## Tested Device
* ACS ACR122U
* HID OMNIKEY 5022 CL

# Usage

## How to add plugin
Type following command from CLI to add this plugin

```
    cordova plugin add cordova-plugin-k-usb-nfc
```

The plugin creates the object `KUsbNfc` into DOM.

## Methods

- [KUsbNfc.connect](#connect)
- [KUsbNfc.disconnect](#disconnect)


## connect

### Description

This method should call once while platform get ready. Once it get connected, then the device information will return into the success callback. Tag information also return into same success callback while tag is present into device.

### Types

```
connect(
    callbackSuccess: (res: any) => void, 
    callbackError: (err: any) => void
    ): void;
```

## disconnect

### Description

This method should invoke to close the usb port for device.

### Types

```
disconnect(
    callbackSuccess: (res: any) => void,
    callbackError: (err: any) => void
    ): void;
```