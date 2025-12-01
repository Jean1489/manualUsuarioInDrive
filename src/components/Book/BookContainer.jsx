import React, { useState, useEffect } from 'react'
import { pages } from '../../utils/pagesData'
import PageWrapper from './PageWrapper'
import BookNavigation from './BookNavigation'

export default function BookContainer({ currentIndex, onChangeIndex }) {
    const [isFlipping, setFlipping] = useState(false)
    const current = currentIndex ?? 0

    useEffect(() => {
        // smooth focus or any side-effects when page changes (placeholder)
    }, [current])

    function goTo(i) {
        if (i < 0 || i >= pages.length) return
        if (isFlipping) return
        setFlipping(true)
        setTimeout(() => {
            onChangeIndex(i)
            setFlipping(false)
        }, 240)
    }

    const PageComponent = pages[current].component

    return (
        <div className="w-full max-w-4xl mx-auto">
            <PageWrapper>
                <div className={`p-8 transition-transform duration-300 ${isFlipping ? 'scale-95' : 'scale-100'}`}>
                    <PageComponent />
                </div>
            </PageWrapper>

            <BookNavigation current={current} total={pages.length} onPrev={() => goTo(current - 1)} onNext={() => goTo(current + 1)} />
        </div>
    )
}
