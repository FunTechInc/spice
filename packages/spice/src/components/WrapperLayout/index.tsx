import {
   createContext,
   useState,
   Dispatch,
   SetStateAction,
   useContext,
} from "react";

import s from "./spice.module.scss";

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
         className={`${s.spice_wrapper} ${
            isOverflow ? s.spice_wrapper_hidden : ""
         }`}>
         {children}
      </div>
   );
};

export const WrapperLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <WrapperContext>
         <Wrapper>{children}</Wrapper>
      </WrapperContext>
   );
};
export const useOverflowDispatch = () => useContext(OverflowDispatchContext);
