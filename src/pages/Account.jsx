import React from 'react'
import SavedShows from '../components/SavedShows';

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[250px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a43711df-c428-4f88-8bb3-b2ac5f20608f/32935458-d049-44c2-b94b-32f16d60ded1/IN-en-20230227-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="/"
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'>
          <div className='absolute top-[20%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl'>My Shows</h1>
          </div>
        </div>
      </div>
      <SavedShows />
    </>
  );
}

export default Account;