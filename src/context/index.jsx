import React, { createContext } from "react";
import PropertiesProvider from "./properties";

const RootProvider = createContext();

const Context = ({ children }) => {
  return (
    <RootProvider.Provider value={[]}>
      <PropertiesProvider>{children}</PropertiesProvider>
    </RootProvider.Provider>
  );
};

export default Context;
