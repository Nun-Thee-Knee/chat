import React, { useState } from 'react';

const ChatPlace = () => {
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    setMessage("");
  };

  return (
    <div className='h-[100vh] bg-fuchsia-950 flex items-center justify-center p-10 gap-10'>
      <div className='w-full p-5 flex gap-5 flex-col items-end justify-end rounded-xl h-[90vh] drop-shadow-2xl bg-fuchsia-600'>
        <div className='h-auto w-full overflow-y-auto'>
          <div className='flex flex-col gap-3'>
            <div className='self-start p-5 flex flex-col gap-1 rounded-xl bg-white'>
              <div className="flex gap-1 w-full items-center justify-start">
                <span className='bg-pink-300 rounded-full px-3 py-1 font-bold'>U</span>
                <h1 className='font-bold'>Username</h1>
              </div>
              <h1>How are you?</h1>
            </div>
            <div className='self-end p-5 flex flex-col gap-1 rounded-xl bg-yellow-200'>
              <div className="flex gap-1 w-full items-center justify-start">
                <span className='bg-green-300 rounded-full px-3 py-1 font-bold'>U</span>
                <h1 className='font-bold'>Username</h1>
              </div>
              <h1>I have been really stressed</h1>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className='flex items-center gap-2 justify-normal w-full'>
          <button type="button" className='bg-fuchsia-950 hover:bg-fuchsia-800 text-white py-2 px-4 rounded-xl font-bold'>Logout</button>
          <input
            onChange={handleInputChange}
            name="message"
            value={message}
            type="text"
            placeholder='Send Text'
            className='rounded-lg text-white p-1 bg-fuchsia-600 border-white border-[1px] w-full'
          />
          <button type="submit" className='bg-fuchsia-950 hover:bg-fuchsia-800 text-white py-2 px-4 rounded-xl font-bold'>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ChatPlace;
