import { useRouter } from "next/dist/client/router";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Login from "./Login";

const AuthGate = ({children}) => {
    const {user} = useContext(AuthContext)
    const router = useRouter()
    if (user) {

    
    return ( <div>{children}</div> );
}
if (!user) {
    return <Login />
}
}
 
export default AuthGate;