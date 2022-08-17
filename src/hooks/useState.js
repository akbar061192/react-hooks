import React, { useState } from 'react';

const App = () => {
  // useState is hook to maintain the state of the app
  // it always return 2 things
  // 1) -> the initial value of the state
  // 2) -> returns a function --> to update the state

  // es6 modern syntax

  // let arr1 = useState()[0];
  // let arr2 = useState()[1];

  // const [counter, setCounter] = useState(10);
  // const [color, setColor] = useState('red');

  const [state, setState] = useState({ counter: 10, color: 'red' });

  // below is for class based
  // state= {count:0,theme:'dark',images:[]}

  // useState should be used always at the top of component
  // should not used inside any conditions

  const decCounter = () => {
    // below is the wrong way to update/mutate the state
    // setCounter(counter - 1);
    // setCounter(counter - 1);

    // better and recommended way
    // setCounter(prevCount => {
    //   return prevCount - 1;
    // });

    // setCounter(prevCount => {
    //   return prevCount - 1;
    // });

    setState(prevState => {
      return {
        ...prevState,
        counter: prevState.counter - 1,
      };
    });
  };

  const incCounter = () => {
    // setCounter(counter + 1);
    // setCounter(prevCount => prevCount + 1);
    setState(prevState => {
      return {
        ...prevState,
        counter: prevState.counter + 1,
      };
    });
  };

  const changeColor = () => {
    // setColor('blue');

    setState(prevState => {
      return {
        ...prevState,
        color: 'blue',
      };
    });
  };

  console.log(state);

  return (
    <div>
      <button onClick={decCounter}>decrement</button>
      <span>{state.counter}</span>
      <button onClick={incCounter}>increment</button>
      <br />
      <button onClick={changeColor}>Change color</button>
      <p>{state.color}</p>
    </div>
  );
};

export default App;
