import { createContext, useState } from "react";

export const NavContexts = createContext();

const NavProvider = ({ children }) => {
  const [activeLinkId, setActiveLinkId] = useState("");

  const providerValue = {
    activeLinkId,
    setActiveLinkId,
  };
  return (
    <NavContexts.Provider value={providerValue}>
      {children}
    </NavContexts.Provider>
  );
};

export default NavProvider;
