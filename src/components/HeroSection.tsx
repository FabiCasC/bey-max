    import { Play } from 'lucide-react'

    export function HeroSection() {
    return (
        <div className="w-full min-h-screen bg-white">
        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-center gap-12">
            
            {/* Video Card */}
            <div className="w-full md:w-1/2 relative">
            <div className="rounded-3xl overflow-hidden relative aspect-[4/3] bg-[#F0FFFE]">
                {/* Embed YouTube Video */}
                <iframe
                src="https://www.youtube.com/embed/cWRE68E-K58" // YouTube video URL
                title="Medical professional"
                className="w-full h-full object-cover"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                />
                {/* Button centered over the video */}
            </div>
        </div>

            {/* Content */}
            <div className="w-full md:w-1/2 space-y-5 text-center md:text-left"> {/* Alineación centrada en pantallas pequeñas y a la izquierda en pantallas grandes */}
            <span className="text-[#00D1B2] font-medium text-base">
                Revolutionizing Healthcare
            </span>

            <h1 className="text-[#111827] text-3xl md:text-4xl font-bold leading-tight">
                Training with AI-Driven Simulations
            </h1>

            <p className="text-[#4B5563] text-lg leading-relaxed max-w-xl mx-auto">
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
