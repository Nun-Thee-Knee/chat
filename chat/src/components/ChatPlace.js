import React, { useContext, useState, useEffect } from "react";
import UserContext from "../context/UserContext";
import Cookies from "js-cookie";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

const ChatPlace = () => {
  const context = useContext(UserContext);
  const { user, setUser, chat, setChat } = context;
  const [message, setMessage] = useState("");

  const Logout = () => {
    setUser({
      userName: "",
      email: "",
    });
    Cookies.remove("userName");
    Cookies.remove("email");
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    socket.on("receiveMessage", (newMessage) => {
      setChat((chat) => [...chat, newMessage]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, [setChat]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (user && user.userName && user.email) {
      const newMessage = {
        chatText: message,
        chatUser: user.userName,
        chatEmail: user.email,
      };
      const url = `http://localhost:5000/chat/send`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMessage),
    });
    const userMessage = await response.json();
      socket.emit("sendMessage", newMessage);
      console.log(userMessage);
      setMessage("");
    } else {
      console.error("User information is missing");
    }
  };

  if (!user || !user.userName || !user.email) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-[100vh] bg-fuchsia-950 flex items-center justify-center p-10 gap-10">
      <div className="w-full p-5 flex flex-col gap-5 items-end justify-end rounded-xl h-[90vh] drop-shadow-2xl bg-fuchsia-600">
        <div className="h-auto w-auto p-3 self-start flex gap-3 items-center justify-center">
          <div
            className="bg-green-500 px-3 font-bold py-1 rounded-full"
            id="profile"
          >
            {user.userName[0]}
          </div>
          <div id="details" className="flex flex-col">
            <h1 className="text-white font-bold">{user.userName}</h1>
            <h1 className="text-white">{user.email}</h1>
          </div>
        </div>
        <div className="h-auto w-full overflow-y-auto flex-grow flex flex-col-reverse">
          <div className="flex flex-col gap-3">
            {chat.map((c, index) => {
              if (c.chatEmail !== user.email)
                return (
                  <div
                    key={index}
                    className="self-start p-5 flex flex-col gap-1 rounded-xl bg-white"
                  >
                    <div className="flex gap-1 w-full items-center justify-start">
                      <span className="bg-pink-300 rounded-full px-3 py-1 font-bold">
                        {c.chatUser[0]}
                      </span>
                      <h1 className="font-bold">{c.chatUser}</h1>
                    </div>
                    <h1>{c.chatText}</h1>
                  </div>
                );
              else
                return (
                  <div
                    key={index}
                    className="self-end p-5 flex flex-col gap-1 rounded-xl bg-yellow-200"
                  >
                    <div className="flex gap-1 w-full items-center justify-start">
                      <span className="bg-green-300 rounded-full px-3 py-1 font-bold">
                        {c.chatUser[0]}
                      </span>
                      <h1 className="font-bold">{c.chatUser}</h1>
                    </div>
                    <h1>{c.chatText}</h1>
                  </div>
                );
            })}
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 justify-normal w-full"
        >
          <button
            onClick={Logout}
            type="button"
            className="bg-fuchsia-950 hover:bg-fuchsia-800 text-white py-2 px-4 rounded-xl font-bold"
          >
            Logout
          </button>
          <input
            onChange={handleInputChange}
            name="message"
            value={message}
            type="text"
            placeholder="Send Text"
            className="rounded-lg text-white p-1 bg-fuchsia-600 border-white border-[1px] w-full"
          />
          <button
            type="submit"
            className="bg-fuchsia-950 hover:bg-fuchsia-800 text-white py-2 px-4 rounded-xl font-bold"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatPlace;
