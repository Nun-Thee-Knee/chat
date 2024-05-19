import React, { useContext } from 'react'
import AuthForm from './AuthForm'
import ChatPlace from './ChatPlace'
import UserContext from '../context/UserContext'

const ChatApp = () => {
    const context = useContext(UserContext);
    const {user} = context;
  return (
    <>
    {!user.email?(<AuthForm/>):(<ChatPlace/>)}
    </>
  )
}

export default ChatApp