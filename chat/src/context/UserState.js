import UserContext from "./UserContext";
import React, {useState} from "react";

const UserState = (props) => {
    const [value, setValue] = useState("This is from the context");
    return (
    <>
    <UserContext.Provider value={{value, setValue}}>
        {props.children}
    </UserContext.Provider>
    </>
    )
}

export default UserState;