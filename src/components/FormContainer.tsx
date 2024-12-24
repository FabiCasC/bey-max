    import { Star } from 'lucide-react'

    interface FormContainerProps {
    iframeHeight: number
    }

    export function FormContainer({ iframeHeight }: FormContainerProps) {
    return (
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 relative overflow-hidden border border-white/20">
        {/* Decorative corner stars */}
        {[
            'top-0 left-0',
            'top-0 right-0',
            'bottom-0 left-0',
            'bottom-0 right-0'
        ].map((position, index) => (
            <div key={index} className={`absolute ${position} p-4`}>
            <Star 
                className={`w-5 h-5 ${index % 2 ? 'text-purple-200' : 'text-blue-200'}`} 
            />
            </div>
        ))}

        {/* Form iframe */}
        <div className="relative">
            <iframe
            src="https://tally.so/embed/3x9Wey?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            width="100%"
            height={iframeHeight}
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Bey-Max Interest Form"
            className="relative z-10"
            />
        </div>
        </div>
    )
    }