'use client';
import React, { createContext, ReactNode, useContext, useState } from 'react';

// Create the context
const SettingsContext = createContext({
  showBanner: true,
});

// Create a provider component
export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [showBanner, setShowBanner] = useState(false);

  const value = {
    setShowBanner,
    showBanner,
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

// Create a custom hook to access the context
export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};
