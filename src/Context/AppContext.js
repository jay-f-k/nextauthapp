"use client";

import { createContext, useContext } from "react";
import { useState } from "react";

const AppContext = createContext(null);

export const DataContext = ({ children }) => {
	// const [model, setModel] = useState(false);

	return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export const GlobalContext = () => {
	return useContext(AppContext);
};
