const funtechLog = `
Created by FunTech with 😘

👉 https://funtech.inc/
👉 https://github.com/FunTechInc

`;

export const funtechConsole = (customLog: string | true) => {
   let log = funtechLog;
   if (typeof customLog === "string") {
      log += customLog;
   }
   console.log(log);
};
