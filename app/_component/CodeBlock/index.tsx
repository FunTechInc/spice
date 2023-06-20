"use client";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

type Tcode = {
   code: string;
};

export const CodeBlock = (props: Tcode) => {
   useEffect(() => {
      Prism.highlightAll();
   }, []);

   return (
      <pre className="language-javascript" tabIndex={0}>
         <code className="language-javascript">{props.code}</code>
      </pre>
   );
};
