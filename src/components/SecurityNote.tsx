    import { Send, Shield } from 'lucide-react'

    export function SecurityNote() {
    return (
        <div className="flex justify-center mt-6">
        <div className="flex items-center gap-3 text-gray-500 text-sm bg-white/50 px-4 py-2 rounded-full backdrop-blur-sm">
            <Shield className="w-4 h-4" />
            <span>Your information is secure with us</span>
            <Send className="w-4 h-4" />
        </div>
        </div>
    )
    }