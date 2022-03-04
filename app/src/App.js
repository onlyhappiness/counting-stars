import { useState } from 'react';
import PaticleBackground from './PaticleBackground';

const App = () => {
  const [click, setClick] = useState(0);

  return (
    <>
      <PaticleBackground click={click} setClick={setClick} />
    </>
  );
};

export default App;
