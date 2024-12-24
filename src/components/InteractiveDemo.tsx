    import { ArrowRight } from 'lucide-react'
    import { Button } from "@/components/ui/button"

    export function InteractiveDemo() {
    return (
        <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-[#E8F5FF] to-[#F0FFFE] rounded-3xl overflow-hidden shadow-lg">
            <div className="flex flex-col md:flex-row items-center">
            {/* Lado izquierdo: Imagen/GIF */}
            <div className="w-full md:w-1/2 p-8">
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-md">
                <img
                    src="/demo-interface.jpg"
                    alt="VirtuCare AI Demo Interface"
                    className="w-full h-full object-cover"
                />
                {/* Superposición para crear el efecto "pantalla" */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
            </div>

            {/* Lado derecho: Texto y CTA */}
            <div className="w-full md:w-1/2 p-8 space-y-6">
                <h2 className="text-3xl font-bold text-[#111827]">
                Interactive Demo: Try the Platform
                </h2>
                <p className="text-lg text-[#4B5563]">
                Explore an interactive clinical case and experience how VirtuCare AI transforms medical learning.
                </p>
                <Button 
                size="lg" 
                className="bg-[#4285F4] hover:bg-[#3B78E7] text-white font-medium px-8 py-3 rounded-full transition-colors shadow-md hover:shadow-lg"
                >
                Try Demo
                </Button>
            </div>
            </div>
        </div>
        </div>
    )
    }
