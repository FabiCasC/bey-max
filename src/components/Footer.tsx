import { Twitter, Linkedin, Youtube, ChevronRight } from 'lucide-react'

    const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/beymax' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/beymax' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/beymax' },
    ]

    const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Demo', href: '/demo' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    ]

    export function Footer() {
    return (
        <footer className="bg-gradient-to-b from-[#E8F5FF] to-[#F0FFFE] pt-16 pb-8 mt-8">
        <div className="max-w-screen-xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Quick Links */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#111827]">Quick Links</h3>
                <ul className="space-y-2">
                {quickLinks.map((link) => (
                    <li key={link.name}>
                    <a
                        href={link.href}
                        className="text-[#4B5563] hover:text-[#4285F4] transition-colors flex items-center group"
                    >
                        <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.name}
                    </a>
                    </li>
                ))}
                </ul>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#111827]">Follow Us</h3>
                <div className="flex space-x-4">
                {socialLinks.map((social) => (
                    <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4B5563] hover:text-[#4285F4] transition-colors"
                    >
                    <social.icon className="h-6 w-6 transform hover:scale-110 transition-transform" />
                    <span className="sr-only">{social.name}</span>
                    </a>
                ))}
                </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-4 lg:col-span-2">
                <h3 className="text-lg font-semibold text-[#111827]">Stay Newsletter</h3>
                <p className="text-[#4B5563]">Subscribe to receive the latest news and updates.</p>
                <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow px-4 py-2 rounded-l-full border-2 border-[#4285F4] focus:outline-none focus:ring-2 focus:ring-[#4285F4] focus:border-transparent"
                />
                <button
                    type="submit"
                    className="bg-[#4285F4] text-white px-6 py-2 rounded-r-full hover:bg-[#3B78E7] transition-colors"
                >
                    Subscribe
                </button>
                </form>
            </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-200 pt-8 text-center mt-8">
            <p className="text-[#4B5563] text-sm">
                © 2024 Bey-Max. All rights reserved.
            </p>
            </div>
        </div>
        </footer>
    )
    }