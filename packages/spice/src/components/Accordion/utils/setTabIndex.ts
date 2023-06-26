/*===============================================
Set tabindex to click element in content
===============================================*/
interface ISetTabIndex {
   content: HTMLDivElement;
   isOpen: boolean;
}
export const setTabIndex = ({ content, isOpen }: ISetTabIndex) => {
   const clickableElms = content.querySelectorAll("a,button");
   if (!clickableElms) {
      return;
   }
   const tabIndex = isOpen ? "0" : "-1";
   clickableElms.forEach((element) => {
      element.setAttribute("tabindex", tabIndex);
   });
};
