"use client";

import {
   createContext,
   useState,
   Dispatch,
   SetStateAction,
   useContext,
} from "react";

const OverflowContext = createContext<boolean>(true);
const OverflowDispatchContext = createContext<
   Dispatch<SetStateAction<boolean>>
>((state) => !state);

const WrapperContext = ({ children }: { children: React.ReactNode }) => {
   const [state, setState] = useState(true);
   return (
      <OverflowContext.Provider value={state}>
         <OverflowDispatchContext.Provider value={setState}>
            {children}
         </OverflowDispatchContext.Provider>
      </OverflowContext.Provider>
   );
};

const Wrapper = ({ children }: { children: React.ReactNode }) => {
   const isOverflow = useContext(OverflowContext);
   return (
      <div
         style={{
            flexDirection: "column",
            display: "flex",
            minHeight: "100vh",
            ...(isOverflow && {
               overflow: "hidden",
            }),
         }}>
         {children}
      </div>
   );
};

/**
 * @description The first main tag of the child elements within SpiceWrapper has flex: 1; applied, allowing the footer to always be fixed at the bottom of the screen. If you set isSticky to true in AsideLayout, overflow is disabled, making sticky positioning simple.
 */
export const SpiceWrapper = ({ children }: { children: React.ReactNode }) => {
   return (
      <WrapperContext>
         <Wrapper>{children}</Wrapper>
      </WrapperContext>
   );
};
export const useOverflowDispatch = () => useContext(OverflowDispatchContext);
