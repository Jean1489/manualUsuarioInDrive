import React from 'react'

export default function PageWrapper({ children }) {
    return (
        <div className="relative bg-white rounded-lg book-shadow overflow-hidden" style={{ minHeight: 600 }}>
            {children}
        </div>
    )
}
