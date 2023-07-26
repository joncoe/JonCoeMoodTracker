import React, { createContext } from 'react';

type AppContextType = {
  greeting: 'Hello';
};

const AppContext = createContext<AppContextType>({
  greeting: 'Hello',
});

export const AppProvider: React.FC = ({ children }) => {
  return (
    <AppContext.Provider value={{ greeting: 'Hello' }}>
      {children}
    </AppContext.Provider>
  );
};
