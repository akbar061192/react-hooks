import React, { memo } from 'react';

const Child = props => {
  console.log('from child');
  return (
    <div>
      <div>Child :{props.counter}</div>
      <button onClick={props.incCounterFromChild}>inc from child</button>
    </div>
  );
};

export default memo(Child);
