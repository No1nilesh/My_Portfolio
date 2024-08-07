/* eslint-disable react/prop-types */
import { Suspense, useRef, useState, useEffect, memo } from "react";
import useGSAP from "../Utility/useGSAPP";
import { Canvas } from "@react-three/fiber";
import { SpotLight } from "@react-three/drei/core/SpotLight";
import { useGLTF } from "@react-three/drei/core/useGLTF";
import { Preload } from "@react-three/drei/core/Preload";
import Loader from "../UIComponents/Loader";
import CustomOrbitControls from "../Utility/CustomOrbitControl";

function Computer({ isMobile }) {
  const ref = useRef();

  useGSAP({
    gsapAnimation: (gsap) => {
      const tl = gsap.timeline({
        defaults: { ease: "Circ.easeOut", duration: 2 },
      });
      isMobile
        ? tl.fromTo(
            ref.current.scale,
            { x: 0.4, y: 0.4, z: 0.4, opacity: 0 },
            { x: 0.7, y: 0.7, z: 0.7, opacity: 1, duration: 1 }
          )
        : tl.fromTo(
            ref.current.scale,
            { x: 0.5, y: 0.5, z: 0.5 },
            { x: 0.75, y: 0.75, z: 0.75, opacity: 1, duration: 1 }
          );
    },
  });

  const computer = useGLTF("/gamingpc/computer.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <SpotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        className="opacity-0"
        ref={ref}
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="absolute inset-0">
      <Canvas
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<Loader />}>
          <CustomOrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computer isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

const MemoizeComputerCanvas = memo(ComputerCanvas);

export default MemoizeComputerCanvas;
