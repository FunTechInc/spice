/**
 * This is a custom hook that is useful when you want to operate tabs other than Button components.
 * @returns (value: string, isAnimation: boolean)=> void
 *
 * ```jsx
 * const tabSwitch = Tab.useTabSwitch();
   tabSwitch("tab", true);
    ```
 */
export declare const useTabSwitch: () => (value: string, isAnimation: boolean) => void;
