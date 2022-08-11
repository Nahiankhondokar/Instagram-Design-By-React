import AuthContext from "../context/AuthContext";
import cookie from 'js-cookie';
import { useReducer } from "react";
import AuthReducer from "../reducers/AuthReducer";


// initial state
const INITIAL_STATE = {
    token : cookie.get("token") || null,
    user : cookie.get("user") ? JSON.parse(cookie.get("user")) : null
}

// create provier 
const AuthContextProvider = ({ children }) => {

    // reducer
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider value={{
            token : state.token,
            user : state.user,
            dispatch
        }}>
            { children }
        </AuthContext.Provider>
    );

}



// exprot 
export default AuthContextProvider;