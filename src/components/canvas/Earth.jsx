import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  // Add error handling for corrupted geometry
  useEffect(() => {
    if (earth.scene) {
      earth.scene.traverse((child) => {
        if (child.isMesh && child.geometry) {
          // Check for NaN values in geometry
          const positions = child.geometry.attributes.position;
          if (positions) {
            const array = positions.array;
            for (let i = 0; i < array.length; i++) {
              if (isNaN(array[i])) {
                console.warn(
                  "Found NaN in Earth geometry positions, skipping corrupted mesh"
                );
                child.visible = false;
                break;
              }
            }
          }
        }
      });
    }
  }, [earth.scene]);

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
