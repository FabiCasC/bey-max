    import React, { useRef } from 'react'
    import { useFrame } from '@react-three/fiber'
    import { Box, Text, Sphere, Float } from '@react-three/drei'

    export function Hospital() {
    const hospitalRef = useRef()

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        hospitalRef.current.rotation.y = Math.sin(t * 0.1) * 0.05
    })

    return (
        <group ref={hospitalRef}>
        <Box args={[10, 5, 10]} position={[0, 2.5, 0]} castShadow receiveShadow>
            <meshStandardMaterial color="#E8F5FF" />
        </Box>
        <Box args={[4, 2, 4]} position={[0, 5.5, 0]} castShadow receiveShadow>
            <meshStandardMaterial color="#B3E5FC" />
        </Box>
        <Sphere args={[0.5, 32, 32]} position={[0, 7, 0]}>
            <meshStandardMaterial color="#FF4081" emissive="#FF4081" emissiveIntensity={0.5} />
        </Sphere>
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <Text position={[0, 5.5, 5.1]} fontSize={0.5} color="#4285F4" anchorX="center" anchorY="middle">
            Emergency
            </Text>
        </Float>
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <Text position={[5.1, 5.5, 0]} fontSize={0.5} color="#4285F4" anchorX="center" anchorY="middle" rotation={[0, Math.PI / 2, 0]}>
            Operating Room
            </Text>
        </Float>
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <Text position={[0, 5.5, -5.1]} fontSize={0.5} color="#4285F4" anchorX="center" anchorY="middle" rotation={[0, Math.PI, 0]}>
            Intensive Care
            </Text>
        </Float>
        </group>
    )
    }

