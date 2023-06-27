import s from "./inner.module.scss";
export const MainInner = ({
   children,
   className,
}: {
   children: React.ReactNode;
   className?: string;
}) => {
   return (
      <div className={`${s.inner} ${className ? className : ""}`}>
         {children}
      </div>
   );
};
