import s from "./inner.module.scss";
export const MainInner = ({
   children,
   className,
   style,
}: {
   children: React.ReactNode;
   className?: string;
   style?: React.CSSProperties;
}) => {
   return (
      <div className={`${s.inner} ${className ? className : ""}`} style={style}>
         {children}
      </div>
   );
};
