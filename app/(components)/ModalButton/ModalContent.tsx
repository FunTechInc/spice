import s from "./style.module.scss";
export const ModalContent = () => {
   return (
      <div className={`${s.modal_content} js_modal_content`} data-lenis-prevent>
         <p>this is modal content</p>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex dolor
            nostrum ea accusantium magni quisquam esse minima provident ut odio
            delectus iste, tenetur nobis corrupti laborum mollitia vitae vero
            ipsam.
         </p>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex dolor
            nostrum ea accusantium magni quisquam esse minima provident ut odio
            delectus iste, tenetur nobis corrupti laborum mollitia vitae vero
            ipsam.
         </p>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex dolor
            nostrum ea accusantium magni quisquam esse minima provident ut odio
            delectus iste, tenetur nobis corrupti laborum mollitia vitae vero
            ipsam.
         </p>
         <button className={`${s.close} spice__modal_close`}>close</button>
      </div>
   );
};
