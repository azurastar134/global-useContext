import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [name, setName] = useState("Nikolaos");

  return (
    <GlobalContext.Provider
      // you can shorten this by just having name , setName
      value={{ name: name, setName: setName }}
    >
      {" "}
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
