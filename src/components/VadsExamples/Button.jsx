import { VaButton } from '@department-of-veterans-affairs/component-library/dist/react-bindings';
import { useState } from 'react';

export const VadsButton = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className='grid-row'>
      <div className='grid-col-12'>
        <h2 className='vads-u-font-size--h3 vads-u-font-weight--bold'>Button (with react-bindings)</h2>
        <VaButton onClick={handleClick} text={`Click me: count ${count}`} />
      </div>
    </div>
  )
};
