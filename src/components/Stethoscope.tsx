    import React, { useRef, useState } from 'react';
    import { useFrame, useThree } from '@react-three/fiber';
    import { Cylinder, Torus, MeshWobbleMaterial } from '@react-three/drei';
    import * as THREE from 'three';

    interface StethoscopeProps {
    position: [number, number, number];
    }

    export function Stethoscope({ position }: StethoscopeProps) {
    const stethoscopeRef = useRef<THREE.Group>(null);
    const [hovered, setHovered] = useState(false);
    const { viewport, mouse } = useThree();

    // Animación del mouse
    useFrame(() => {
        if (stethoscopeRef.current) {
        const x = (mouse.x * viewport.width) / 2;
        const y = (mouse.y * viewport.height) / 2;
        stethoscopeRef.current.position.x = position[0] + x * 0.1;
        stethoscopeRef.current.position.y = position[1] + y * 0.1;
        }
    });

    const currentColor = hovered ? "#64B5F6" : "#2196F3";

    return (
        <group ref={stethoscopeRef} position={position}>
        <Cylinder args={[0.05, 0.05, 0.5, 32]} rotation={[Math.PI / 2, 0, 0]}>
            <MeshWobbleMaterial factor={0.3} speed={2} color={currentColor} />
        </Cylinder>
        <Torus
            args={[0.2, 0.05, 16, 100]}
            position={[0, 0, 0.25]}
            rotation={[Math.PI / 2, 0, 0]}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <MeshWobbleMaterial factor={0.3} speed={2} color={currentColor} />
        </Torus>
        </group>
    );
    }