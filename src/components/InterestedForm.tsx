    import { useState, useEffect } from 'react'
    import { FormHeader } from '../components/FormHeader'
    import { FormContainer } from '../components/FormContainer'
    import { SecurityNote } from '../components/SecurityNote'

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
        <div className="relative min-h-screen">
        <div className="container mx-auto px-4 py-20 relative">
            <div className="max-w-3xl mx-auto">
            <FormHeader />
            <FormContainer iframeHeight={iframeHeight} />
            <SecurityNote />
            </div>
        </div>
        </div>
    )
    }