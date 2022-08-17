import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState('posts');

  const [counter, setCounter] = useState(0);

  const clickPosts = () => {
    console.log('posts clicked');
    setData('posts');
  };

  const clickUsers = () => {
    console.log('users clicked');
    setData('users');
  };

  const clickComments = () => {
    console.log('comments clicked');
    setData('comments');
  };

  useEffect(() => {
    console.log('running use-effect');
    fetch(`https://jsonplaceholder.typicode.com/${data}`)
      .then(response => response.json())
      .then(json => console.log(json));
  }, [data]);

  return (
    <div>
      <button onClick={clickPosts}>Posts</button>
      <button onClick={clickUsers}>Users</button>
      <button onClick={clickComments}>Comments</button>

      <div>{data}</div>

      <button onClick={() => setCounter(prevCount => prevCount + 1)}>click me</button>

      <div>{counter}</div>
    </div>
  );
};

export default App;
