import React from 'react';
import Main from '../components/Main';
import Row from '../components/Row';
import requests from '../Request';

const Home = () => {
  //console.log(requests);
  const re = {
    title : "popular",
    fetchURL : "https://api.themoviedb.org/3/movie/popular?api_key=fb0410526e6ca523d5e6fbbf4908413b"
  }
  return (
    <>
      <Main />
      {requests.map((request) => {
        console.log(request);
        return (<Row title={request.title} fetchURL={request.fetchURL} />)
        console.log("Row component called");
      })}    </>
  );
}

export default Home;