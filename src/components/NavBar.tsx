    import { useState } from 'react'
    import { Menu, X } from 'lucide-react'

    const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Features', href: '#features' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Contact', href: '#contact' },
    ]

    export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
                <img className="h-8 w-auto" src="/vite.svg" alt="Bey-Max Logo" />
            </div>
            <div className="hidden md:flex items-center">
                {navItems.map((item) => (
                <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                    {item.name}
                </a>
                ))}
            </div>
            <div className="md:hidden flex items-center">
                <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                >
                {isOpen ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
                </button>
            </div>
            </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
            <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item) => (
                <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsOpen(false)}
                >
                    {item.name}
                </a>
                ))}
            </div>
            </div>
        )}
        </nav>
    )
    }