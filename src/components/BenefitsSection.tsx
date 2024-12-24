import { Award, BarChart3, Brain, BadgeIcon as Certificate, Settings, Users } from 'lucide-react'

export function BenefitsSection() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
                    Why Choose Bey-Max
                </h2>
                <p className="text-[#4B5563] text-lg max-w-2xl mx-auto">
                    Discover how our platform transforms medical education at both individual and institutional levels
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Individual Benefits */}
                <div className="space-y-8">
                    <div className="relative">
                        <div className="bg-[#E8F5FF] rounded-2xl p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -mr-16 -mt-16" />
                            <div className="relative z-10">
                                <img 
                                    src="/doctor-learning.png" 
                                    alt="Individual Learning" 
                                    className="w-48 h-48 mx-auto mb-6"
                                />
                                <h3 className="text-2xl font-bold text-[#111827] mb-4">
                                    Individual Benefits
                                </h3>
                                <div className="space-y-4">
                                    <BenefitItem
                                        icon={<Brain className="w-6 h-6 text-[#00D1B2]" />}
                                        title="Skill Improvement"
                                        description="Develop both technical and empathetic skills through realistic simulations"
                                    />
                                    <BenefitItem
                                        icon={<Certificate className="w-6 h-6 text-[#00D1B2]" />}
                                        title="Digital Certificates"
                                        description="Receive certifications validated by recognized institutions"
                                    />
                                    <BenefitItem
                                        icon={<Award className="w-6 h-6 text-[#00D1B2]" />}
                                        title="Personalized Progress"
                                        description="Learn at your own pace with content tailored to your needs"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Floating decorative elements */}
                        <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#00D1B2]/10 rounded-full animate-pulse" />
                        <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-[#4285F4]/10 rounded-full animate-pulse delay-100" />
                    </div>
                </div>

                {/* Institutional Benefits */}
                <div className="space-y-8">
                    <div className="relative">
                        <div className="bg-[#F0FFFE] rounded-2xl p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-100 rounded-full -mr-16 -mt-16" />
                            <div className="relative z-10">
                                <img 
                                    src="/institution-dashboard.png" 
                                    alt="Institutional Benefits" 
                                    className="w-48 h-48 mx-auto mb-6"
                                />
                                <h3 className="text-2xl font-bold text-[#111827] mb-4">
                                    Institutional Benefits
                                </h3>
                                <div className="space-y-4">
                                    <BenefitItem
                                        icon={<Settings className="w-6 h-6 text-[#00D1B2]" />}
                                        title="Advanced Customization"
                                        description="Adapt scenarios according to your institution's specific protocols"
                                    />
                                    <BenefitItem
                                        icon={<BarChart3 className="w-6 h-6 text-[#00D1B2]" />}
                                        title="Detailed Analytics"
                                        description="Monitor group progress with advanced metrics in real-time"
                                    />
                                    <BenefitItem
                                        icon={<Users className="w-6 h-6 text-[#00D1B2]" />}
                                        title="Team Management"
                                        description="Manage groups and coordinate training sessions efficiently"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Floating decorative elements */}
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#00D1B2]/10 rounded-full animate-pulse" />
                        <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-[#4285F4]/10 rounded-full animate-pulse delay-100" />
                    </div>
                </div>
            </div>
        </div>
    )
}

interface BenefitItemProps {
    icon: React.ReactNode
    title: string
    description: string
}

function BenefitItem({ icon, title, description }: BenefitItemProps) {
    return (
        <div className="flex items-start gap-4 bg-white/80 backdrop-blur-sm rounded-xl p-4 transition-all hover:shadow-md">
            <div className="shrink-0">
                {icon}
            </div>
            <div>
                <h4 className="font-semibold text-[#111827] mb-1">{title}</h4>
                <p className="text-[#4B5563] text-sm">{description}</p>
            </div>
        </div>
    )
}
