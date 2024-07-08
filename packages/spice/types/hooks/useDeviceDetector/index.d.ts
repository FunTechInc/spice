type mobileOSType = "iOS" | "Android" | undefined;
type RenderingEngine = "Gecko" | "WebKit" | "Presto" | "Trident" | "EdgeHTML" | "Blink";
type DeviceState = {
    /** `iOS` | `Android` | `undefined` */
    mobileOS: mobileOSType;
    /** `Gecko` | `WebKit` | `Presto` | `Trident` | `EdgeHTML` | `Blink` */
    renderingEngine: RenderingEngine;
    userAgent: string;
    testing?: boolean;
};
export declare const useDeviceDetector: (testing?: ((ua: string) => boolean) | undefined) => DeviceState | undefined;
export {};
