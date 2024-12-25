    import { useState } from 'react'
    import { Popup } from './Popup'
    import doctor from '../assets/doctors-office.png'
    import med1 from '../assets/medical-app.png'
    import med2 from '../assets/medicine.png'
    import med3 from '../assets/healthcare.png'
    import med4 from '../assets/doctor-bag.png'

    export function ServicesSection() {
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const openPopup = () => setIsPopupOpen(true)
    const closePopup = () => setIsPopupOpen(false)

    return (
        <section className="bg-[#F2F7FF] py-16 lg:py-24">
        <div className="container mx-auto px-4">
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
                
                <button 
                onClick={openPopup}
                className="bg-[#4285F4] hover:bg-[#3B78E7] text-white font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                Try demo
                </button>
            </div>

            {/* Right Illustration */}
            <div className="w-full lg:w-1/2 relative">
                <div className="relative w-[400px] h-[400px] mx-auto">
                {/* Dashed Circle */}
                <div className="absolute inset-0 border-4 border-dashed border-[#00D1B2] rounded-full animate-spin-slow"></div>
                
                {/* Center Image */}
                <div className="absolute inset-0 m-auto w-48 h-48 bg-[#E8F5FF] rounded-full flex items-center justify-center overflow-hidden">
                    <img 
                    src={doctor} 
                    alt="Doctor in office" 
                    className="w-[200px] h-[240px] object-cover"
                    />
                </div>

                {/* Floating Icons */}
                <img src={med1} alt="Medical app" className="absolute top-10 left-10 w-12 h-12" />
                <img src={med2} alt="Medicine" className="absolute bottom-20 left-0 w-12 h-12" />
                <img src={med3} alt="Healthcare" className="absolute top-20 right-10 w-12 h-12" />
                <img src={med4} alt="Doctor bag" className="absolute bottom-10 right-20 w-12 h-12" />
                </div>
            </div>
            </div>
        </div>

        <Popup isOpen={isPopupOpen} onClose={closePopup} />
        </section>
    )
    }

