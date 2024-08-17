import React, { createContext, useState, useContext } from 'react';

const RegisterContext = createContext();

export const useRegister = () => useContext(RegisterContext);

export const RegisterProvider = ({ children }) => {
    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        businessNumber: '',
        phone: '',
        password: '',
    });

    return (
        <RegisterContext.Provider value={{ registerData, setRegisterData }}>
            {children}
        </RegisterContext.Provider>
    );
};
