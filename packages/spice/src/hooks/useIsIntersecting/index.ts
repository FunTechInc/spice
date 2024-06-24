"use client";

import { useState } from "react";
import {
   useIntersectionObserver,
   IntersectionObserverProps,
} from "../useIntersectionObserver";

export const useIsIntersecting = (props: IntersectionObserverProps) => {
   const [isIntersecting, setIsIntersecting] = useState(false);
   useIntersectionObserver({
      ...props,
      onEnter: () => setIsIntersecting(true),
      onLeave: () => setIsIntersecting(false),
   });
   return isIntersecting;
};
