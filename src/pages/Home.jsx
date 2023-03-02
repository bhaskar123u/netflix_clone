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
<<<<<<< HEAD
        return <Row key={request.title} title={request.title} fetchURL={request.fetchURL} />
      })}
    </>
=======
        console.log(request);
        return (<Row title={request.title} fetchURL={request.fetchURL} />)
        console.log("Row component called");
      })}    </>
>>>>>>> ea03f5668264099ab628f6ee00f093de89ef1226
  );
}

export default Home;