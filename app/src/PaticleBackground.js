import React from 'react';
import Particles from 'react-tsparticles';

function PaticleBackground({ click, setClick }) {
  const particlesInit = (main) => {
    console.log('메인-------', '\n', main);
    // console.log('나와');
  };

  const particlesLoaded = (container) => {
    // container.onclick(console.log('나와'));
    // console.log('컨테이너=======', '\n', container);
    // console.log('컨테이너=======', '\n', container.interactivity);
    // console.log('컨테이너=======', '\n', container.interactivity.mouse);
    // console.log(
    //   '컨테이너=======',
    //   '\n',
    //   container.interactivity.mouse.clicking
    // );
  };

  return (
    <React.Fragment>
      {/* <div
        onClick={() => {
          setClick(click + 1);
          console.log(click);
        }}
      >
        AAA
      </div> */}
      <Particles
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: '#0D0D0D',
            },
          },
          fpsLimit: 120,
          // interactivity: {
          //   events: {
          //     onClick: {
          //       enable: true,
          //       mode: 'push',
          //     },
          //     onHover: {
          //       enable: true,
          //       mode: 'repulse',
          //     },
          //     resize: true,
          //   },
          //   modes: {
          //     bubble: {
          //       distance: 400,
          //       duration: 2,
          //       opacity: 0.8,
          //       size: 40,
          //     },
          //     push: {
          //       quantity: 4,
          //     },
          //     repulse: {
          //       distance: 200,
          //       duration: 0.4,
          //     },
          //   },
          // },
          particles: {
            number: {
              value: 218,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: ['#F2C849', '#735A2D'],
            },
            shape: {
              // type: 'circle',
              type: 'star',
              stroke: {
                width: 0,
                color: '#000000',
              },
              polygon: {
                nb_sides: 5,
              },
              // image: {
              //   src: 'img/github.svg',
              //   width: 100,
              //   height: 100,
              // },
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 4,
                size_min: 0.3,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: '#ffffff',
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              random: true,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 600,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              // onhover: {
              //   enable: true,
              //   mode: 'bubble',
              // },
              onclick: {
                enable: true,
                mode: 'repulse',
              },

              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 250,
                size: 0,
                duration: 2,
                opacity: 0,
                speed: 3,
              },
              repulse: {
                distance: 400,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </React.Fragment>
  );
}

export default PaticleBackground;
