// import land from './land.png';
import cat from './cat.gif';
import moon2 from './moon2.jpg';
// import moon3 from './moon3.jpg';
// import land2 from './land2.jpg';
import land3 from './land.jpg';
// import shop from './shop.mp4';



import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from 'react';

function App() {
  const ref = useRef();

  return (
    <div>
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${moon2})`,
            backgroundSize: "contain",
          }}
          onClick={() => ref.current.scrollTo(3)}
          >
            <h1>Hello Fariha</h1>
        </ParallaxLayer>

        <ParallaxLayer
         offset={2} 
         speed={1}
         factor={4}
         style={{
          backgroundImage: `url(${land3})`,
          backgroundSize: `cover`,
         }}
         >
        </ParallaxLayer>

        <ParallaxLayer
         offset={1}
         speed={1}
         onClick={() => ref.current.scrollTo(3)}
        >
        </ParallaxLayer>

        <ParallaxLayer
        offset={3.2}
        speed={2}
        onClick={() => ref.current.scrollTo(0)}
        >
          <h1>Fariha & Snow</h1>
        </ParallaxLayer>


         <ParallaxLayer
         sticky={{start:0.4, end: 6.5}}
         >
          <img src={cat} />
         </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default App;
