    import { X, HardHat } from 'lucide-react'

    interface PopupProps {
    isOpen: boolean
    onClose: () => void
    }

    export function Popup({ isOpen, onClose }: PopupProps) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
        <div className="bg-gradient-to-br from-[#E8F5FF] to-[#F0FFFE] rounded-3xl shadow-xl max-w-md w-full overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-[#B3E5FC]">
            <h2 className="text-2xl font-bold text-[#111827]">Project Update</h2>
            <button
                onClick={onClose}
                className="text-[#4B5563] hover:text-[#111827] transition-colors"
                aria-label="Close popup"
            >
                <X size={24} />
            </button>
            </div>
            <div className="p-6 space-y-6">
            <div className="flex items-center justify-center">
                <HardHat size={64} className="text-[#4285F4]" />
            </div>
            <p className="text-[#4B5563] text-lg text-center">
                The project is currently under construction. Please fill out the interest form to stay updated on the latest developments.
            </p>
            <button
                onClick={onClose}
                className="w-full bg-[#4285F4] hover:bg-[#3B78E7] text-white font-medium px-6 py-3 rounded-full transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
                Close
            </button>
            </div>
        </div>
        </div>
    )
    }

