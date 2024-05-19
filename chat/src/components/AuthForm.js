import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import Cookies from "js-cookie";

const AuthForm = () => {
  const context = useContext(UserContext);
  const {setUser} = context
  const [auth, setAuth] = useState("signup");
  const [credentials, setCredentials] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleAuth = () => {
    setAuth(auth === "signup" ? "signin" : "signup");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { userName, email, password } = credentials;
    setCredentials({ userName: "", email: "", password: "" });
    const data = {
      userName: userName,
      email: email,
      password: password,
    };
    const url = `https://chat-ew8z.onrender.com/user/${auth}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const userData = await response.json();
    setUser({
      userName: userData.userName,
      email: userData.email
    })
    Cookies.set('userName', userData.userName);
    Cookies.set('email', userData.email);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="bg-fuchsia-800 flex justify-center items-center h-[100vh]">
        <div className="bg-fuchsia-400 h-auto w-auto p-10 rounded-xl drop-shadow-2xl">
          <div className="flex">
            <div
              onClick={handleAuth}
              className={`${
                auth === "signup" ? "bg-fuchsia-950" : ""
              } text-white font-bold text-xl py-5 px-10 cursor-pointer hover:bg-fuchsia-950 border-white-950 border-[2px] rounded-l-xl`}
            >
              SignUp
            </div>
            <div
              onClick={handleAuth}
              className={`${
                auth === "signin" ? "bg-fuchsia-950" : ""
              } text-white font-bold text-xl py-5 px-10 cursor-pointer hover:bg-fuchsia-950 border-white-950 border-[2px] rounded-r-xl`}
            >
              SignIn
            </div>
          </div>
          <div className="mt-5 gap-5 flex flex-col items-center justify-between">
            <div
              className={`${
                auth === "signin" ? "hidden" : ""
              } w-full flex gap-5 items-center justify-center`}
            >
              <h1 className="font-bold uppercase text-fuchsia-950">
                UserName:{" "}
              </h1>
              <input
                name="userName"
                value={credentials.userName}
                onChange={handleChange}
                className="drop-shadow-2xl rounded-md"
                type="text"
              />
            </div>
            <div className="w-full flex gap-5 items-center justify-between">
              <h1 className="font-bold uppercase text-fuchsia-950">Email: </h1>
              <input
                name="email"
                value={credentials.email}
                onChange={handleChange}
                className="drop-shadow-2xl rounded-md"
                type="email"
              />
            </div>
            <div className="w-full flex gap-5 items-center justify-between">
              <h1 className="font-bold uppercase text-fuchsia-950">
                Password:{" "}
              </h1>
              <input
                name="password"
                value={credentials.password}
                onChange={handleChange}
                className="drop-shadow-2xl rounded-md"
                type="password"
              />
            </div>
          </div>
          <div className="mt-10 flex items-center justify-center w-full">
            <button
              type="submit"
              className="bg-fuchsia-950 text-white p-3 w-full rounded-xl hover:bg-fuchsia-700 font-bold text-xl"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AuthForm;
