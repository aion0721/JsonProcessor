import { createContext, useState, useContext } from "react";

const SystemContext = createContext();

export function useSystemContext() {
  return useContext(SystemContext);
}

export function SystemProvider({ children }) {
  const [serv, setServ] = useState({
    //  tirmap1f_os: ["root", "login00"],
    //  tirmap2f_os: ["root", "login00", "login02"],
    //  tirmdb1f_os: ["root", "login00"],
  });
  const [ssch, setSsch] = useState({
    // tirmap1f_os: ["login00", "login10"],
    // tirmdb1f_os: ["root", "login00", "login01"],
    // tirmdb2f_os: ["root", "login00", "login01", "login03"],
  });

  //const countDown = () => {
  //  setCount(count - 1);
  //};

  const value = {
    serv,
    setServ,
    ssch,
    setSsch,
  };

  return (
    <SystemContext.Provider value={value}>{children}</SystemContext.Provider>
  );
}
