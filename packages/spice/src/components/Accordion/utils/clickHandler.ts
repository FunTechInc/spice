type TClickHandler = {
   height: number;
   target: HTMLDivElement;
};
export type TCallback = {
   open: (props: TClickHandler) => void;
   close: (props: TClickHandler) => void;
};
interface IClickHandler {
   wrapper: HTMLDivElement;
   inner: HTMLDivElement;
   isOpen: boolean;
   callback: TCallback;
}
/*===============================================
callback event
===============================================*/
export const clickHandler = ({
   wrapper,
   inner,
   isOpen,
   callback,
}: IClickHandler) => {
   const height = inner.getBoundingClientRect().height;
   const callbackProps = {
      height: height,
      target: wrapper,
   };
   if (isOpen) {
      callback.close(callbackProps);
   } else {
      callback.open(callbackProps);
   }
};
