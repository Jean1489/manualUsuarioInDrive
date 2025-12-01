import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function BookNavigation({ current, total, onPrev, onNext }) {
    return (
        <div className="flex justify-between items-center p-6 border-t bg-gray-50 rounded-b-lg">
            <button
                onClick={onPrev}
                disabled={current === 0}
                className={`flex items-center gap-2 px-5 py-3 rounded font-semibold ${current === 0 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-[var(--indrive)] text-white hover:bg-[var(--indrive-dark)]'}`}
            >
                <ChevronLeft className="w-4 h-4" />
                <span>Anterior</span>
            </button>

            <div className="text-center">
                <p className="text-sm text-gray-500">Página</p>
                <p className="text-2xl font-bold text-[var(--indrive)]">{current + 1} / {total}</p>
            </div>

            <button
                onClick={onNext}
                disabled={current === total - 1}
                className={`flex items-center gap-2 px-5 py-3 rounded font-semibold ${current === total - 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-[var(--indrive)] text-white hover:bg-[var(--indrive-dark)]'}`}
            >
                <span>Siguiente</span>
                <ChevronRight className="w-4 h-4" />
            </button>
        </div>
    )
}
