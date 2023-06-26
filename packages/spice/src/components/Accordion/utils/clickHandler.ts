type TClickHandler = {
   height: number;
   target: HTMLDivElement;
};
export type TClickEvent = {
   open: (props: TClickHandler) => void;
   close: (props: TClickHandler) => void;
};
interface IClickHandler {
   wrapper: HTMLDivElement;
   inner: HTMLDivElement;
   isOpen: boolean;
   clickEvent: TClickEvent;
}
/*===============================================
callback event
===============================================*/
export const clickHandler = ({
   wrapper,
   inner,
   isOpen,
   clickEvent,
}: IClickHandler) => {
   const height = inner.getBoundingClientRect().height;
   const callbackProps = {
      height: height,
      target: wrapper,
   };
   if (isOpen) {
      clickEvent.close(callbackProps);
   } else {
      clickEvent.open(callbackProps);
   }
};
