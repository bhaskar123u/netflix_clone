import React, {useState, useEffect } from 'react';

const Row = ({title, fetchURL}) => {
  console.log(title);
  console.log(fetchURL);
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    console.log("Hello");
    const getAllMovieForRow = async () => {
      const data = await fetch(fetchURL);
      const jsonData = await data.json();
      
      //console.log(jsonData);
      setMovie(jsonData.results);
    };

    getAllMovieForRow();
  }, [fetchURL]);

  //console.log(movies);

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center'>
        <div id={'slider'}>
          {movies.map((item, id) => {
            <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
              <img
                src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                alt={item?.title}
              />
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default Row;