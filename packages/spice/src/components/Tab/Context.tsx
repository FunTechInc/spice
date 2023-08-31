import {
   Dispatch,
   SetStateAction,
   createContext,
   useContext,
   useState,
} from "react";

/*===============================================
create context
===============================================*/
type TTabState = {
   isLeaving: boolean;
   isAnimation: boolean;
   prev: string;
   current: string;
   next: string;
};

const defaultState: TTabState = {
   isLeaving: false,
   isAnimation: true,
   prev: "",
   current: "",
   next: "",
};

const tabStateContext = createContext<TTabState>(defaultState);
const setTabStateContext = createContext<Dispatch<SetStateAction<TTabState>>>(
   () => undefined
);

/*===============================================
context component
===============================================*/
interface IContext {
   children: React.ReactNode;
   defaultValue: string;
}

/**
 * @param defaultValue string Please set the value that you want to open by default.
 */
export const Context = ({ children, defaultValue }: IContext) => {
   if (defaultValue === "") {
      throw new Error(
         "Please set the value to something other than an empty string."
      );
   }
   const [tabState, setTabState] = useState({
      isLeaving: false,
      isAnimation: true,
      prev: "",
      current: defaultValue,
      next: "",
   });
   return (
      <tabStateContext.Provider value={tabState}>
         <setTabStateContext.Provider value={setTabState}>
            {children}
         </setTabStateContext.Provider>
      </tabStateContext.Provider>
   );
};

export const useTabState = () => useContext(tabStateContext);
export const useSetTabState = () => useContext(setTabStateContext);
