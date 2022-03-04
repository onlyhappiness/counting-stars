import React from 'react';
import Flash from 'react-reveal/Flash';
import countingStar from '../img/counting-star.png';

function CountingStar() {
  return (
    <>
      <Flash>
        <img src={countingStar} />
      </Flash>
    </>
  );
}

export default CountingStar;
