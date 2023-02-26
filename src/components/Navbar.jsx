import React from 'react'

const Navbar = () => {
  return (
    <div className='flex text-white z-[100] w-full absolute text-center justify-between p-3 cursor-pointer'>
      <h1 className='text-red-600 text-4xl font-bold'>NETFLIX</h1>
      <div>
        <button className='text-white pr-4'>Sign In</button>
        <button className='bg-red-600 p-6 py-2 rounded text-white'>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar;