import { useRef, useState, useEffect } from "react";
import { promiseMaker } from "../../utils/promiseMaker";
import s from "./spice.module.scss";

interface ITab {
   lists: {
      wrapperClassName?: string;
      buttonClassName?: string;
      isViewClassName?: string;
      children: React.ReactNode[];
   };
   contents: {
      children: React.ReactNode[];
   };
   callback: {
      leave: (target: Element) => void;
      enter: (target: Element) => void;
   };
}

export const Tab = ({ lists, contents, callback }: ITab) => {
   const isFirst = useRef(false);
   const isLeaving = useRef(false);
   const [isView, setIsView] = useState(0);
   const contentRefArr: React.RefObject<HTMLLIElement>[] = [];
   /*===============================================
	clickHandler
	===============================================*/
   const clickHandler = async (i: number) => {
      if (isView === i || isLeaving.current) {
         return;
      }
      isLeaving.current = true;
      await promiseMaker(callback.leave(contentRefArr[isView].current!));
      setIsView(i);
   };
   useEffect(() => {
      if (!isFirst.current) {
         isFirst.current = true;
         return;
      }
      isLeaving.current = false;
      callback.enter(contentRefArr[isView].current!);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [isView]);
   /*===============================================
	list
	===============================================*/
   const listArr = lists.children.map((child, i) => {
      return (
         <button
            onClick={() => {
               clickHandler(i);
            }}
            key={i}
            className={`${lists.buttonClassName} ${s.spice_tab_button} ${
               isView === i ? lists.isViewClassName : ""
            }`}>
            {child}
         </button>
      );
   });
   /*===============================================
	content
	===============================================*/
   const List = ({
      children,
      index,
   }: {
      children: React.ReactNode;
      index: number;
   }) => {
      const ref = useRef(null);
      contentRefArr.push(ref);
      return (
         <li ref={ref} className={isView === index ? "" : s.spice_tab_hidden}>
            {children}
         </li>
      );
   };
   const contentArr = contents.children.map((child, i) => {
      return (
         <List key={i} index={i}>
            {child}
         </List>
      );
   });

   return (
      <div>
         <div className={lists.wrapperClassName}>{listArr}</div>
         <ul className={s.spice_tab_contentWrapper}>{contentArr}</ul>
      </div>
   );
};
