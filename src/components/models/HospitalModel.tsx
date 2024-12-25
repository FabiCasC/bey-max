    import { useRef } from 'react';
    import * as THREE from 'three';
    import { useFrame } from '@react-three/fiber';
    import { useGLTF } from '@react-three/drei';

    export function HospitalModel() {
    const hospitalRef = useRef<THREE.Object3D>();
    const { scene } = useGLTF('/Copy of Hospital.glb');

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (hospitalRef.current) {
        hospitalRef.current.rotation.y = Math.sin(t * 0.15) * 0.05;
        }
    });

    return <primitive ref={hospitalRef} object={scene} scale={0.5} position={[0, 2, 0]} />;
    }