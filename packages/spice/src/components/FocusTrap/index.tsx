/**
 * @param focusTarget set focus to `focusTarget` when the component is focused.
 */
export const FocusTrap = ({
   focusTarget,
}: {
   focusTarget: React.RefObject<HTMLElement>;
}) => {
   return (
      <div
         onFocus={() => focusTarget.current?.focus()}
         tabIndex={0}
         style={{
            opacity: 0,
            width: 0,
            height: 0,
            position: "absolute",
            zIndex: "-99999999",
            pointerEvents: "none",
         }}></div>
   );
};
