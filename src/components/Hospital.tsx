    import React from "react";
    import { Canvas } from "@react-three/fiber";
    import { OrbitControls, useGLTF } from "@react-three/drei";

    const Hospital: React.FC = () => {
    const { scene, nodes, materials } = useGLTF("src/public/Hospital.glb"); // Asegúrate de que el modelo esté en la carpeta 'public'

    return (
        <Canvas
        style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1, // Esto pone el modelo en el fondo
            backgroundColor: "transparent", // Aseguramos que el fondo sea transparente
        }}
        camera={{ position: [0, 1, 5] }}
        >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <primitive object={scene} scale={0.5} />
        <OrbitControls enableZoom={false} />
        </Canvas>
    );
    };

    export default Hospital;
