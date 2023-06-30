export const promiseMaker = (
   callbackResult: void | Promise<unknown> | null
): Promise<null> => {
   return new Promise((resolve) => {
      if (callbackResult instanceof Promise) {
         callbackResult.then(() => {
            resolve(null);
         });
      } else {
         resolve(null);
      }
   });
};
