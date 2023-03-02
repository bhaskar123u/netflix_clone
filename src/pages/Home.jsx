import React from 'react';
import Main from '../components/Main';
import Row from '../components/Row';
import requests from '../Request';

const Home = () => {
  //console.log(requests);
  return (
    <>
      <Main />
      {requests.map((request) => {
        return (<Row title={request.title} fetchURL={request.fetchURL} />)
      })}
    </>
  );
}

export default Home;