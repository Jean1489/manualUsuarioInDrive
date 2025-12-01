import React from 'react'
import { pages } from '../utils/pagesData'

export default function SidebarMenu({ open, onClose, currentIndex, onJump }) {
    return (
        <aside className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl transform transition-transform z-40 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold" style={{ color: 'var(--indrive)' }}>Navegación</h3>
                    <button onClick={onClose} className="text-gray-500" aria-label="Cerrar menú">✕</button>
                </div>

                <nav className="space-y-2 overflow-y-auto max-h-[76vh]">
                    {pages.map((p, i) => (
                        <button
                            key={p.id}
                            onClick={() => onJump(i)}
                            className={`w-full text-left px-4 py-3 rounded transition-all duration-150 ${currentIndex === i ? 'bg-[var(--indrive)] text-white' : 'bg-gray-100 text-gray-700 hover:bg-[var(--indrive)] hover:text-white'}`}
                        >
                            {p.title}
                        </button>
                    ))}
                </nav>
            </div>
        </aside>
    )
}
