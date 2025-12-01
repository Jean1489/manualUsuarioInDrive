export default function PortadaPage() {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center text-center animate-fadeIn">

            {/* Logo */}
            <div className="w-28 h-28 rounded-2xl bg-indrive flex items-center justify-center shadow-lg mb-6">
                <span className="text-white text-4xl font-bold">iD</span>
            </div>

            {/* Títulos */}
            <h1 className="text-4xl font-bold text-neutral-900 mb-2">
                Manual del Usuario
            </h1>

            <h2 className="text-2xl text-neutral-600 mb-6">
                InDrive – Aplicación Drivers
            </h2>

            {/* Línea */}
            <div className="w-32 h-1 bg-indrive rounded-full mb-6"></div>

            {/* Versión */}
            <div className="text-neutral-500 text-sm">
                Versión 1.0 · Actualizado 2025
            </div>

            {/* Fondo decorativo */}
            <div className="absolute bottom-10 w-[80%] h-32 bg-indrive/10 rounded-3xl blur-xl"></div>
        </div>
    );
}
