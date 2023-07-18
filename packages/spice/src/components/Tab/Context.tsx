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
   prev: string;
   current: string;
   next: string;
};

const defaultState: TTabState = {
   isLeaving: false,
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

export const Context = ({ children, defaultValue }: IContext) => {
   const [tabState, setTabState] = useState({
      isLeaving: false,
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
