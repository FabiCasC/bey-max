    import uno from '../assets/1.svg';
    import dos from '../assets/2.svg';
    import tres from '../assets/3.svg';
    import cuatro from '../assets/4.svg';
    import cinco from '../assets/5.svg';
    import seis from '../assets/6.svg';

    interface FeatureCard {
    title: string;
    description: string;
    icon: string;
    }

    const features: FeatureCard[] = [
    {
        title: "AI-Generated Patients",
        description: "Practice with diverse AI-generated patients, each presenting unique medical conditions.",
        icon: uno
    },
    {
        title: "Adaptive Scenarios",
        description: "Dynamic scenarios that evolve based on your decisions, providing realistic medical challenges.",
        icon: dos
    },
    {
        title: "Real-Time Feedback",
        description: "Get instant feedback on your performance and decision-making process during simulations.",
        icon: tres
    },
    {
        title: "Multiplayer Collaboration",
        description: "Work with others in team-based simulations for a complete medical experience.",
        icon: cuatro
    },
    {
        title: "Advanced Institutional Tools",
        description: "Comprehensive tools and analytics to track and enhance performance monitoring.",
        icon: cinco
    },
    {
        title: "Immersive Virtual Training",
        description: "State-of-the-art virtual environments with realistic medical scenarios.",
        icon: seis
    }
    ];

    export function FeaturesGrid() {
    return (
        <div className="min-h-screen bg-[#F2F7FF]">
        <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
                <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                <div className="space-y-4">
                    <div className="w-full h-64 mx-auto">
                    <img
                        src={feature.icon}
                        alt={feature.title}
                        className="w-full h-full object-contain"
                    />
                    </div>

                    <h3 className="text-xl font-semibold text-[#111827] text-center">
                    {feature.title}
                    </h3>

                    <p className="text-[#4B5563] text-center">
                    {feature.description}
                    </p>

                    <button className="w-full bg-[#4285F4] hover:bg-[#3B78E7] text-white font-medium px-6 py-2.5 rounded-full transition-colors">
                    More information
                    </button>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
    }