    import { Play } from 'lucide-react'

    export function HeroSection() {
    return (
        <div className="w-full min-h-screen bg-white">
        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-start gap-12">
            {/* Video Card */}
            <div className="w-full md:w-1/2 relative">
            <div className="rounded-3xl overflow-hidden relative aspect-[4/3] bg-[#F0FFFE]">
                <img
                src="/doctor-image.jpg" // Replace with your image
                alt="Medical professional"
                className="w-full h-full object-cover brightness-105 contrast-105"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
                </div>
            </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 space-y-5">
            <span className="text-[#00D1B2] font-medium text-base">
                Revolutionizing Healthcare
            </span>

            <h1 className="text-[#111827] text-3xl md:text-4xl font-bold leading-tight">
                Training with AI-Driven Simulations
            </h1>

            <p className="text-[#4B5563] text-lg leading-relaxed max-w-xl">
                Bey-Max helps healthcare professionals enhance their skills through immersive, adaptive simulations with dynamic AI-generated patients and real-time feedback, ensuring you're ready for any medical challenge.
            </p>

            <button className="bg-[#4285F4] hover:bg-[#3B78E7] text-white font-medium px-8 py-3.5 rounded-full transition-colors shadow-sm">
                Explore the Future of Medical Training
            </button>
            </div>
        </div>
        </div>
    )
    }