import React, { useEffect, useState, useRef } from 'react';

// useRef

const App = () => {
  const [name, setName] = useState('');
  // const [renderCount, setRenderCount] = useState(0);
  const renderCount = useRef(1);
  const focusInput = useRef();

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  // useEffect(() => {
  //   focusInput.current.focus();
  // });

  const focus = () => {
    focusInput.current.focus();
  };

  console.log('page renders');
  console.log(focusInput);
  return (
    <div>
      <input ref={focusInput} type='text' onChange={e => setName(e.target.value)} value={name} />
      <div>my name is {name}</div>
      <div>My page renders {renderCount.current} times</div>
      <button onClick={focus}>click me to focus</button>
    </div>
  );
};

export default App;

// context api
// useReducer
