    import { useThree, useFrame } from '@react-three/fiber';

    export function CameraAnimation() {
    const { camera } = useThree();
    const baseDistance = 45;
    const height = 15;
    
    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        const totalCycleDuration = 60; 
        const phase = (t % totalCycleDuration) / totalCycleDuration;

        const distancePhase = Math.sin(phase * Math.PI * 2);
        const currentDistance = baseDistance + (distancePhase * 10);


        const sidePhase = ((t % 20) / 20) * Math.PI * 2;
        const x = Math.sin(sidePhase) * currentDistance;
        
        camera.position.set(
        x,
        height,
        currentDistance
        );
        camera.lookAt(0, height, 0);
    });

    return null;
    }