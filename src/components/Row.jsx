import { React, useState, useEffect } from 'react';
import axios from 'axios';

const Row = (title, fetchURL) => {
  console.log("Hi");
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    /*axios.get(fetchURL).then((response) => {
      setMovie(response.data);
    })*/

    const getAllMovieForRow = async () => {
      const data = await fetch(fetchURL);
      const jsonData = await data.json();
      
      console.log(jsonData);
      setMovie(jsonData.results);
    };

    getAllMovieForRow();
  }, [fetchURL]);

  console.log(movies);

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className='relative flex items-center'>
        <div id={'slider'}>

        </div>
      </div>
    </>
  )
}

export default Row