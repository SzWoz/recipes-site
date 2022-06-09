import React, { createContext } from "react";

AuthContext = createContext()

const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider>

        </AuthContext.Provider>
    )
}