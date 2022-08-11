import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";


// authenticate user middlewaare
const AuthRedirectUser = ({ children }) => {

    const { token } = useContext(AuthContext);

    return token ? <Navigate to="/" /> : children;


}

// export 
export default AuthRedirectUser;