import React, { createContext, useContext, useState } from 'react';

// Context 생성
const AuthContext = createContext();

// AuthProvider 컴포넌트
export const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(null);

    return (
        <AuthContext.Provider value={{ accessToken, setAccessToken }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);