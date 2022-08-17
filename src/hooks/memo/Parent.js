import React, { useState, useCallback, useEffect, useMemo } from 'react';
import Child from './Child';

const Parent = () => {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState('');

  const [dark, setDark] = useState(false);

  const incCounter = () => {
    setCounter(prev => prev + 1);
  };
  console.log('from parent');

  // the child component will re-render when,
  // the state of child changes
  // the props passed to the child changes

  // holds the fun in memory and do a shallow comparison and changes only when the particular value is changes.
  const incCounterFromChild = useCallback(() => {
    return setCounter(prev => prev + 1);
  }, [counter]);

  // oxd11
  // oxd12

  // reference data types
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black',
    };
  }, [dark]);

  // oxe12
  // oxe13

  useEffect(() => {
    console.log('theme changes');
  }, [themeStyles]);

  return (
    <div>
      <h1>hello from parent : {counter} </h1>
      <button onClick={incCounter}>increment</button>
      <input type='text' value={input} onChange={event => setInput(event.target.value)} />
      <Child counter={counter} incCounterFromChild={incCounterFromChild} />

      <br />
      <br />

      <p style={themeStyles}>Lorem ipsum dolor sit amet.</p>
      <button onClick={() => setDark(!dark)}>change theme</button>
    </div>
  );
};

export default Parent;
