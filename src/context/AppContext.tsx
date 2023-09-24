// AppContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context value
interface AppContextValue {
  sharedData: string;
  setSharedData: React.Dispatch<React.SetStateAction<string>>;
}

// Create a context for sharing data
export const AppContext = createContext<AppContextValue | undefined>(undefined);

// Define the props for AppProvider
interface AppProviderProps {
  children: ReactNode; // ReactNode includes all valid children types
}

// Create a provider component to wrap your app
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [sharedData, setSharedData] = useState<string>("Initial data");

  return (
    <AppContext.Provider value={{ sharedData, setSharedData }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to access the context values
export const useAppContext = (): AppContextValue => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
