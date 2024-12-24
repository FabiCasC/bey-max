    import { useState, useEffect } from 'react'

    export function InterestForm() {
    const [iframeHeight, setIframeHeight] = useState(400)

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
        if (event.data.type === 'tally-height') {
            setIframeHeight(event.data.height)
        }
        }

        window.addEventListener('message', handleMessage)
        return () => window.removeEventListener('message', handleMessage)
    }, [])

    return (
        <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#111827] text-center mb-8">
            Interested in Bey-Max?
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-6">
            <iframe
                src="https://tally.so/embed/3x9Wey?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                width="100%"
                height={iframeHeight}
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Bey-Max Interest Form"
            ></iframe>
            </div>
        </div>
        </div>
    )
    }
