import React, { createContext, useEffect, useMemo, useState } from 'react';

export const userContext = createContext();

function UserContextProvider({ children }) {
  const [User, setUser] = useState(() => {
    // Use a function to initialize User from localStorage
    return localStorage.getItem('user-data')?.replace(/"/g, '') || false;
  });

  useEffect(() => {
    // Update localStorage when User changes
    localStorage.setItem('user-data', JSON.stringify(User));
  }, [User]);

  const contextValue = useMemo(() => ({ User, setUser }), [User]);

  return (
    <userContext.Provider value={contextValue}>
      {children}
    </userContext.Provider>
  );
}

export default UserContextProvider;
