export function ServicesSection() {
    return (
        <div className="min-h-screen bg-[#F2F7FF] flex items-center">
            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        <span className="text-[#00D1B2] font-medium">Services</span>
                        
                        <h2 className="text-3xl md:text-4xl font-bold text-[#111827] leading-tight">
                            Experienced in multiple medical practices
                        </h2>
                        
                        <p className="text-[#4B5563] text-lg leading-relaxed max-w-xl">
                            Transform medical training with immersive simulations and real-time feedback, empowering healthcare professionals to deliver exceptional care in real-world scenarios.
                        </p>
                        
                        <button className="bg-[#4285F4] hover:bg-[#3B78E7] text-white font-medium px-8 py-3 rounded-full transition-colors">
                            Try demo
                        </button>
                    </div>

                    {/* Right Illustration */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative w-[400px] h-[400px] mx-auto">
                            {/* Dashed Circle */}
                            <div className="absolute inset-0 border-4 border-dashed border-[#00D1B2] rounded-full animate-spin-slow"></div>
                            
                            {/* Center Image */}
                            <div className="absolute inset-0 m-auto w-48 h-48 bg-[#E8F5FF] rounded-full flex items-center justify-center">
                                <img src="/doctor-xray.png" alt="Doctor with X-ray" className="w-32 h-32" />
                            </div>
                            
                            {/* Floating Icons */}
                            <img src="/pills.png" alt="" className="absolute top-10 left-10 w-12 h-12" />
                            <img src="/uterus.png" alt="" className="absolute bottom-20 left-0 w-12 h-12" />
                            <img src="/dna.png" alt="" className="absolute top-20 right-10 w-12 h-12" />
                            <img src="/stethoscope.png" alt="" className="absolute bottom-10 right-20 w-12 h-12" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
