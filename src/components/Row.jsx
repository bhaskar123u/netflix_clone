import React, { useState, useEffect } from 'react';
import rating from '../icons/rating-icon.png';

const Row = ({ title, fetchURL }) => {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    const getAllMovieForRow = async () => {
      const data = await fetch(fetchURL);
      const jsonData = await data.json();

      setMovie(jsonData.results);
    };

    getAllMovieForRow();
  }, [fetchURL]);

  console.log(movies);

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center'>
        <div id={'slider'}>
          {movies.map((item, id) => {
            return (
              <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative group p-2">
                <img
                  className="w-full h-auto block rounded group-hover:opacity-30 group-hover:bg-black-100"
                  src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`}
                  alt={item?.title}
                />
                <div className="absolute top-2 left-3 w-full h-full opacity-0 group-hover:opacity-100 text-white text-xs sm:text-sm md:text-100 lg:text-300">
                  <p>{item?.title}</p>
                  <p>{item?.vote_average}/10</p>
                  <div className='flex items-center'>
                    <p>{item?.vote_count}</p>
                    <img className="w-3 h-3 ml-1" src={rating} alt="rating-icon" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default Row;