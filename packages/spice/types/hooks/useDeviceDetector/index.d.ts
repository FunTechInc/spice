type mobileOSType = "iOS" | "Android" | undefined;
type RenderingEngine = "Gecko" | "WebKit" | "Presto" | "Trident" | "EdgeHTML" | "Blink" | undefined;
type DeviceState = {
    /** `iOS` | `Android` | `undefined` */
    mobileOS: mobileOSType;
    /** returns the result of `/Mobi/.test(ua)` */
    isMobile: boolean | undefined;
    /** `Gecko` | `WebKit` | `Presto` | `Trident` | `EdgeHTML` | `Blink` | `undefined` */
    renderingEngine: RenderingEngine;
    userAgent: string;
    /** Result of executing the testing function for the argument */
    testing: boolean | undefined;
};
export declare const useDeviceDetector: (testing?: ((ua: string) => boolean) | undefined) => DeviceState;
export {};
