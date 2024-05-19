import UserContext from "./UserContext";
import React, {useState} from "react";
import Cookies from "js-cookie";

const UserState = (props) => {
    const [user, setUser] = useState({
        userName: Cookies.get('userName'),
        email: Cookies.get('email')
    })
    return (
    <>
    <UserContext.Provider value={{user, setUser}}>
        {props.children}
    </UserContext.Provider>
    </>
    )
}

export default UserState;