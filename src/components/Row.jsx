import React, { useState, useEffect } from 'react';
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Row = ({title, fetchURL, rowId }) => {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    const getAllMovieForRow = async () => {
      const data = await fetch(fetchURL);
      const jsonData = await data.json();

      setMovie(jsonData.results);
    };

    getAllMovieForRow();
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight = () => {
    var slider = document.getElementById('slider' + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block w-5 md:w-7 h-5 md:h-7" size={40} onClick={slideLeft} />
        <div id={'slider' + rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
          {movies.map((item, id) => {
            return (
                <Movie key={id} item={item} />
            );
          })}
        </div>
        <MdChevronRight className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block w-5 md:w-7 h-5 md:h-7" size={40} onClick={slideRight} />
      </div>
    </>
  )
}

export default Row;