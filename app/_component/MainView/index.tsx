import s from "./mv.module.scss";

interface IMainView {
   title: string;
   description?: React.ReactComponentElement<any>;
   demo?: React.ReactComponentElement<any>;
   code?: React.ReactComponentElement<any>;
}

export const MainView = (props: IMainView) => {
   return (
      <div className={s.wrapper}>
         <h1 className={s.title}>{props.title}</h1>
         {props.description && (
            <div className={s.block}>
               <p className={s.blockTitle}>description</p>
               <div className={s.desc}>{props.description}</div>
            </div>
         )}
         {props.demo && (
            <div className={s.block}>
               <p className={s.blockTitle}>demo</p>
               {props.demo}
            </div>
         )}
         {props.code && (
            <div className={s.block}>
               <p className={s.blockTitle}>code</p>
               <div className={s.code}>{props.code}</div>
            </div>
         )}
      </div>
   );
};
