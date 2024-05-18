import React from 'react'

const ChatPlace = () => {
  return (
    <div className='h-[100vh] bg-fuchsia-950 flex items-center justify-center p-10 gap-10'>
        <div className='w-full p-5 flex items-end justify-end rounded-xl h-[90vh] drop-shadow-2xl bg-fuchsia-600'>
            <div className='flex items-center gap-5 justify-normal w-full'>
            <button className='bg-fuchsia-950 hover:bg-fuchsia-800 text-white p-2 rounded-xl font-bold'>Logout</button>
            <input type="text" placeholder='Send Text' className='rounded-lg text-white p-1 bg-fuchsia-600 border-white border-[1px] w-full'/>
            <button className='bg-fuchsia-950 hover:bg-fuchsia-800 text-white p-2 rounded-xl font-bold'>Send</button>
            </div>
        </div>
    </div>
  )
}

export default ChatPlace