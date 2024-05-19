import UserContext from "./UserContext";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const UserState = (props) => {
    const [user, setUser] = useState({
        userName: Cookies.get('userName'),
        email: Cookies.get('email')
    });

    const [chat, setChat] = useState([]);

    useEffect(() => {
        const fetchChatData = async () => {
            try {
                const response = await fetch("https://chat-ew8z.onrender.com/chat");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setChat(data);
            } catch (error) {
                console.error('Failed to fetch chat data:', error);
            }
        };

        fetchChatData();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, chat, setChat }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserState;
