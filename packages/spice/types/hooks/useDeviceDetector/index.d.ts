type DeviceType = "iOS" | "Android" | undefined;
export declare const useDeviceDetector: () => {
    /** `iOS` | `Android` | `undefined` */
    device: DeviceType;
    /** whether the device is `iOS` || `Android` */
    isMobile: boolean;
};
export {};
