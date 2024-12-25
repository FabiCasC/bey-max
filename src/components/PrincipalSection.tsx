    import { Suspense } from 'react';
    import { Canvas } from '@react-three/fiber';
    import { OrbitControls } from '@react-three/drei';
    import { CameraAnimation } from '../components/animations/CameraAnimation';
    import { HospitalModel } from '../components/models/HospitalModel';

    export function PrincipalSection() {
    return (
        <section className="relative w-full h-[70vh] overflow-hidden">
        <Canvas shadows camera={{ position: [0, -2, 25], fov: 60 }}>
            <Suspense fallback={null}>
            <CameraAnimation />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
            <HospitalModel />
            <OrbitControls 
                enableZoom={true} 
                enablePan={true} 
                maxPolarAngle={Math.PI / 2} 
                minPolarAngle={Math.PI / 3}
            />
            </Suspense>
        </Canvas>

        <div className="absolute inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
            <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Welcome to Bey-Max
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                Experience the future of medical training with our AI-driven simulations.
            </p>
            <div className="mt-8">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full mr-4 transition duration-300">
                Get Started
                </button>
                <button className="bg-transparent hover:bg-white hover:text-blue-500 text-white font-bold py-2 px-6 rounded-full border border-white transition duration-300">
                Learn More
                </button>
            </div>
            </div>
        </div>
        </section>
    );
    }

    export default PrincipalSection;