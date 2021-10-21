import { useState } from "react";
import { auth } from "../config/firebase.config";
import {onAuthStateChanged} from "firebase/auth"

const useUser = () => {
    const [user, setUser] = useState(null)

    onAuthStateChanged(auth, u => {
        if (u) {
            setUser(u)
        } else {
            setUser(null)
        }
    })
    return {user: user}
}
 
export default useUser;