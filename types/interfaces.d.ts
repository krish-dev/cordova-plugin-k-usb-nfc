import { ResponseType, TagType } from "./enums";

export interface KUsbNfc {
    connect(
        callbackSuccess: (res: NfcDeviceConnectionReponse | NfcTagReponse) => void,
        callbackError: (err: NfcDeviceConnectionReponse | NfcTagReponse | any) => void): void;

    disconnect(
        callbackSuccess: (res: NfcDeviceConnectionReponse) => void,
        callbackError: (err: any) => void): void;

}

export interface NfcDeviceInfo {
    class: number;
    location: string;
    name: string;
    productId: number;
    vendorId: number;
}

export interface NfcTagInfo {
    tagType: TagType;
    uid: string;
    uidReverse: string;
    uidHex: string;
    uidHexReverse: string;
    uid4byteHex: string;
    uid4byteHexReverse: string;
}

export interface NfcDeviceConnectionReponse {
    type: ResponseType;
    message: string;
    deviceInfo: NfcDeviceInfo
}

export interface NfcTagReponse {
    type: ResponseType;
    message: string;
    tagInfo: NfcTagInfo
}