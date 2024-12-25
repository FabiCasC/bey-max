    export function HeroSection() {
        return (
        <div className="w-full min-h-screen bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            {/* Video Card - Full width on mobile, half width on larger screens */}
            <div className="w-full md:w-1/2 relative order-2 md:order-1">
                <div className="rounded-3xl overflow-hidden relative aspect-[4/3] bg-[#F0FFFE] shadow-lg">
                <iframe
                    src="https://www.youtube.com/embed/cWRE68E-K58"
                    title="Medical professional"
                    className="w-full h-full object-cover"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
                </div>
            </div>
    
            {/* Content - Stacks on top on mobile, side by side on larger screens */}
            <div className="w-full md:w-1/2 space-y-4 sm:space-y-5 text-center md:text-left order-1 md:order-2">
                <span className="inline-block text-[#00D1B2] font-medium text-sm sm:text-base">
                Revolutionizing Healthcare
                </span>
    
                <h1 className="text-[#111827] text-2xl sm:text-3xl md:text-4xl font-bold leading-tight max-w-xl mx-auto md:mx-0">
                Training with AI-Driven Simulations
                </h1>
    
                <p className="text-[#4B5563] text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                Bey-Max helps healthcare professionals enhance their skills through immersive, adaptive simulations with dynamic AI-generated patients and real-time feedback, ensuring you're ready for any medical challenge.
                </p>
    
                <div className="pt-2 sm:pt-4">
                <button className="w-full sm:w-auto bg-[#4285F4] hover:bg-[#3B78E7] text-white font-medium px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-colors shadow-sm text-sm sm:text-base">
                    Explore the Future of Medical Training
                </button>
                </div>
            </div>
            </div>
        </div>
        );
    }