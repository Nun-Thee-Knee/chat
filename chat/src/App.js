import React from 'react';
import AuthForm from './components/AuthForm';
import ChatPlace from './components/ChatPlace';
import UserState from './context/UserState';



function App() {
  return (
    <React.StrictMode>
      <UserState>
    <div className="App">
      <AuthForm/>
    </div>
    </UserState>
    </React.StrictMode>
  );
}

export default App;
