import React from 'react'
import { Menu, Home } from 'lucide-react'

export default function HeaderButtons({ onMenu, onHome }) {
    return (
        <>
            <button
                onClick={onMenu}
                aria-label="Abrir menú"
                className="fixed top-4 left-4 z-30 bg-white p-3 rounded-full shadow hover:shadow-lg"
            >
                <Menu className="w-5 h-5 text-[var(--indrive)]" />
            </button>

            <button
                onClick={onHome}
                aria-label="Ir a portada"
                className="fixed top-4 right-4 z-30 bg-white p-3 rounded-full shadow hover:shadow-lg"
            >
                <Home className="w-5 h-5 text-[var(--indrive)]" />
            </button>
        </>
    )
}
