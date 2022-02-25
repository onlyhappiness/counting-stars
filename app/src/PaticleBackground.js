import React from 'react';
import Particles from 'react-tsparticles';
import particlesConfig from './config/paticle-config';

function PaticleBackground() {
  return <Particles params={particlesConfig}></Particles>;
}

export default PaticleBackground;
