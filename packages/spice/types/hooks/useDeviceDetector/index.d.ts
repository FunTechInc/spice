type mobileOSType = "iOS" | "Android" | undefined;
type RenderingEngine = "Gecko" | "WebKit" | "Presto" | "Trident" | "EdgeHTML" | "Blink" | undefined;
type DeviceState = {
    /** `iOS` | `Android` | `undefined` */
    mobileOS: mobileOSType;
    /** `Gecko` | `WebKit` | `Presto` | `Trident` | `EdgeHTML` | `Blink` | `undefined` */
    renderingEngine: RenderingEngine;
    userAgent: string;
    testing: boolean | undefined;
};
export declare const useDeviceDetector: (testing?: ((ua: string) => boolean) | undefined) => DeviceState;
export {};
