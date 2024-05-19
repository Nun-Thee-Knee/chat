import React from 'react';
import UserState from './context/UserState';
import ChatApp from './components/ChatApp';



function App() {
  return (
    <React.StrictMode>
      <UserState>
    <div className="App">
      <ChatApp/>
    </div>
    </UserState>
    </React.StrictMode>
  );
}

export default App;
