type SetTabIndexProps = {
   content: HTMLDivElement;
   isOpen: boolean;
};
export const setTabIndex = ({ content, isOpen }: SetTabIndexProps) => {
   const clickableElms = content.querySelectorAll("a,button");
   if (!clickableElms) {
      return;
   }
   const tabIndex = isOpen ? "0" : "-1";
   clickableElms.forEach((element) => {
      element.setAttribute("tabindex", tabIndex);
   });
};
