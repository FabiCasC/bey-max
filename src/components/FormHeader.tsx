    import { Sparkles } from 'lucide-react'

    export function FormHeader() {
    return (
        <div className="text-center mb-12 relative z-10">
        <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-blue-500 animate-pulse" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Interested in Bey-Max?
            </h2>
            <Sparkles className="w-6 h-6 text-pink-500 animate-pulse" />
        </div>
        <p className="text-gray-600 max-w-xl mx-auto">
            Join us in shaping the future of AI assistance. Fill out the form below and be part of something extraordinary.
        </p>
        </div>
    )
    }