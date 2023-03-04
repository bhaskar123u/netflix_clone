import React from 'react';
import rating from "../icons/rating-icon.png";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";

const Movie = ({ item }) => {
  
  const [like, setLike] = useState(false);
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
        <img
          className="w-full h-auto block rounded group-hover:opacity-30 group-hover:bg-black-100"
          src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`}
          alt={item?.title}
        />
        <div className="absolute top-3 left-3 w-full h-full opacity-0 group-hover:opacity-100 text-white text-xs sm:text-sm md:text-100 lg:text-300">
        <p>
          {like ? <FaHeart /> : <FaRegHeart />}
        </p>
        <p>
          {item?.title}
        </p>
        <div className="flex items-center">
          <p>{Math.round(item?.vote_average * 10) / 10}</p>
          <img className="w-3 h-3 ml-1" src={rating} alt="rating-icon" />
        </div>
        </div>
      </div>
  );
}

export default Movie