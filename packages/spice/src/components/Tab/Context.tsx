import {
   Dispatch,
   SetStateAction,
   createContext,
   useContext,
   useState,
} from "react";

type TabState = {
   isLeaving: boolean;
   isAnimation: boolean;
   prev: string;
   current: string;
   next: string;
};

const defaultState: TabState = {
   isLeaving: false,
   isAnimation: true,
   prev: "",
   current: "",
   next: "",
};

const tabStateContext = createContext<TabState>(defaultState);
const setTabStateContext = createContext<Dispatch<SetStateAction<TabState>>>(
   () => undefined
);

type ContextProps = {
   children: React.ReactNode;
   /** Please set the value that you want to open by default. */
   defaultValue: string;
};

export const Context = ({ children, defaultValue }: ContextProps) => {
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
