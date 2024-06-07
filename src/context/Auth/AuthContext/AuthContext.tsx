import React, { createContext, useReducer } from "react";
import { authReducer, initialState } from "../authReducer/authReducer";
import { AuthContextProps, credentialsProps } from "../../../types";

const AuthContext = createContext<AuthContextProps | undefined>(undefined)


export default function AuthContextProvider({ children } : { children: React.ReactNode}) {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const login = async (credentials: credentialsProps) => {
        try {
            const response = await fetch(`http://localhost:8000/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(credentials),
            });

            if (response.ok) {
                const userData = await response.json();
                localStorage.setItem("user", JSON.stringify(userData));
                dispatch({ type: "LOGIN_SUCCESS", payload: userData })
            } else {
                const errorData = await response.json();
                dispatch({ type: "LOGIN_FAILURE", payload: errorData.message });
            }
        } catch (error: any) {
            dispatch({ type: "LOGIN_FAILURE", payload: error.message })
        }
    }

    return (
        <AuthContext.Provider value={{state, login, dispatch}}>
            {children}
        </AuthContext.Provider>
    )

}