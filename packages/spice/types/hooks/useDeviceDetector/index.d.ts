type DeviceType = "iOS" | "Android" | undefined;
export declare const useDeviceDetector: () => {
    device: DeviceType;
    isMobile: boolean;
};
export {};
