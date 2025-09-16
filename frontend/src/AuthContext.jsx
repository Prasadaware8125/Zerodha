// import React, { createContext, useState, useContext, useEffect } from 'react';

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [token, setToken] = useState(null);

//     useEffect(() => {
//         const storedToken = localStorage.getItem('token');
//         if (storedToken) {
//             setToken(storedToken);
//             setIsLoggedIn(true);
//         }
//     }, []);

//     const login = (newToken) => {
//         setToken(newToken);
//         localStorage.setItem('token', newToken);
//         setIsLoggedIn(true);
//     };

//     const logout = () => {
//         setToken(null);
//         localStorage.removeItem('token');
//         setIsLoggedIn(false);
//     };

//     const value = { isLoggedIn, token, login, logout };

//     return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export const useAuth = () => {
//     return useContext(AuthContext);
// };