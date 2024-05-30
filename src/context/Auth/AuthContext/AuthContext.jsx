import { createContext, useReducer } from "react";
import { initialState, authReducer } from "../authReducer/authReducer";

const AuthContext = createContext({
    state: initialState,
    dispatch: () => null,
    user:null,
});


export default function AuthContextProvider({children}){
    const [state, dispatch] = useReducer(authReducer, initialState);
  
    const login = async (credentials) => {
        try{
            const response = await fetch(`http://localhost:8000/login`, {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(credentials),
            });

            if(response.ok){
                const userData = await response.json();
                localStorage.setItem("user", JSON.stringify(userData));
                dispatch({ type: "LOGIN_SUCCESS", payload: userData})
            }else{
                const errorData = await response.json();
                dispatch({type: "LOGIN_FAILURE", payload: errorData.message});
            }
        }catch(error){
            dispatch({type: "LOGIN_FAILURE", payload: error.message})
        }
    }

    return(
        <AuthContext.Provider value={{user: state.user, login}}>
            {children}
        </AuthContext.Provider>
    )

}