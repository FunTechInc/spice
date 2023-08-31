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
type TAccordionState = {
   target: string;
   toggle: boolean;
   defaultValue: string[];
};

const defaultState: TAccordionState = {
   target: "",
   toggle: false,
   defaultValue: [],
};

const AccordionStateContext = createContext<TAccordionState>(defaultState);
const setAccordionStateContext = createContext<
   Dispatch<SetStateAction<TAccordionState>>
>(() => undefined);

/*===============================================
context component
===============================================*/
interface IContext {
   children: React.ReactNode;
   defaultValue: string[];
}

/**
 * @param defaultValue string[] Please set the value that you want to open by default.
 */
export const Context = ({ children, defaultValue }: IContext) => {
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
