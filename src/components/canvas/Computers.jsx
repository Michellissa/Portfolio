import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ deviceType }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  // Add error handling for corrupted geometry
  useEffect(() => {
    if (computer.scene) {
      computer.scene.traverse((child) => {
        if (child.isMesh && child.geometry) {
          // Check for NaN values in geometry
          const positions = child.geometry.attributes.position;
          if (positions) {
            const array = positions.array;
            for (let i = 0; i < array.length; i++) {
              if (isNaN(array[i])) {
                console.warn(
                  "Found NaN in geometry positions, skipping corrupted mesh"
                );
                child.visible = false;
                break;
              }
            }
          }
        }
      });
    }
  }, [computer.scene]);

  // Responsive configurations
  const getResponsiveConfig = () => {
    switch (deviceType) {
      case "mobile":
        return {
          scale: 0.4,
          position: [0, -2, -1.5],
          rotation: [-0.01, -0.2, -0.1],
          lightIntensity: 0.8,
        };
      case "tablet":
        return {
          scale: 0.5,
          position: [0, -2.2, -1.7],
          rotation: [-0.01, -0.2, -0.1],
          lightIntensity: 1.0,
        };
      case "desktop":
      default:
        return {
          scale: 0.6,
          position: [0, -2.5, -1.8],
          rotation: [-0.01, -0.2, -0.1],
          lightIntensity: 1.2,
        };
    }
  };

  const config = getResponsiveConfig();

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={config.lightIntensity} position={[10, 10, 10]} />
      <pointLight
        intensity={config.lightIntensity * 0.5}
        position={[-10, -10, -10]}
      />
      <directionalLight
        intensity={config.lightIntensity * 0.3}
        position={[0, 10, 5]}
      />
      <primitive
        object={computer.scene}
        scale={config.scale}
        position={config.position}
        rotation={config.rotation}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [deviceType, setDeviceType] = useState("desktop");

  useEffect(() => {
    const updateDeviceType = () => {
      const width = window.innerWidth;
      if (width <= 640) {
        setDeviceType("mobile");
      } else if (width <= 1024) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    // Initial check
    updateDeviceType();

    // Listen for window resize
    window.addEventListener("resize", updateDeviceType);

    return () => {
      window.removeEventListener("resize", updateDeviceType);
    };
  }, []);

  // Responsive camera settings
  const getCameraSettings = () => {
    switch (deviceType) {
      case "mobile":
        return {
          position: [15, 1, 3],
          fov: 35,
        };
      case "tablet":
        return {
          position: [16, 1.5, 3.5],
          fov: 30,
        };
      case "desktop":
      default:
        return {
          position: [17, 2, 4],
          fov: 28,
        };
    }
  };

  const cameraSettings = getCameraSettings();

  return (
    <div className="w-full h-full">
      <Canvas
        frameloop={deviceType === "mobile" ? "never" : "demand"}
        shadows={deviceType !== "mobile"}
        camera={{
          position: cameraSettings.position,
          fov: cameraSettings.fov,
        }}
        gl={{
          preserveDrawingBuffer: true,
          antialias: deviceType !== "mobile",
          powerPreference:
            deviceType === "mobile" ? "low-power" : "high-performance",
        }}
        dpr={deviceType === "mobile" ? 1 : [1, 2]}
        style={{
          width: "100%",
          height: "100%",
          minHeight: deviceType === "mobile" ? "300px" : "400px",
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={deviceType === "desktop"}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            enablePan={false}
            enableRotate={true}
            autoRotate={deviceType !== "mobile"}
            autoRotateSpeed={deviceType === "tablet" ? 0.5 : 1}
            enableDamping={deviceType !== "mobile"}
            dampingFactor={0.05}
          />
          <Computers deviceType={deviceType} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
