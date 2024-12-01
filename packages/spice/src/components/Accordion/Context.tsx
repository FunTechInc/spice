import {
   Dispatch,
   SetStateAction,
   createContext,
   useContext,
   useState,
} from "react";

type AccordionState = {
   target: string;
   toggle: boolean;
   defaultValue: string[];
};

const defaultState: AccordionState = {
   target: "",
   toggle: false,
   defaultValue: [],
};

const AccordionStateContext = createContext<AccordionState>(defaultState);
const setAccordionStateContext = createContext<
   Dispatch<SetStateAction<AccordionState>>
>(() => undefined);

export type ContextProps = {
   children: React.ReactNode;
   /** Please set the value that you want to open by default. */
   defaultValue?: string[];
};

export const Context = ({ children, defaultValue = [] }: ContextProps) => {
   const [AccordionState, setAccordionState] = useState({
      target: "",
      toggle: false,
      defaultValue: defaultValue,
   });
   return (
      <AccordionStateContext.Provider value={AccordionState}>
         <setAccordionStateContext.Provider value={setAccordionState}>
            {children}
         </setAccordionStateContext.Provider>
      </AccordionStateContext.Provider>
   );
};

export const useAccordionState = () => useContext(AccordionStateContext);
export const useSetAccordionState = () => useContext(setAccordionStateContext);
