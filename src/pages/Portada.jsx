import logo from "../assets/logo.png";

export default function PortadaPage() {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center text-center animate-fadeIn relative">

            {/* Logo */}
            <div className="w-28 h-28 rounded-2xl bg-white flex items-center justify-center shadow-xl mb-6 relative z-10 overflow-hidden">
                <img
                    src={logo}
                    alt="Logo InDrive"
                    className="w-full h-full object-contain p-3"
                />
            </div>

            {/* Títulos */}
            <h1 className="text-4xl font-bold text-accent mb-2 relative z-10">
                Manual del Usuario
            </h1>

            <h2 className="text-2xl text-secondary font-semibold mb-6 relative z-10">
                InDrive – Aplicación Drivers
            </h2>

            {/* Línea decorativa */}
            <div className="w-32 h-1 bg-secondary rounded-full mb-6 relative z-10"></div>

            {/* Versión */}
            <div className="text-accent/70 text-sm font-medium relative z-10">
                Versión 1.0 · Actualizado 2025
            </div>

            {/* Fondo decorativo con gradiente */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <div className="w-[600px] h-[600px] bg-secondary/20 rounded-full blur-3xl"></div>
                <div className="absolute w-[400px] h-[400px] bg-accent/10 rounded-full blur-2xl"></div>
            </div>

            {/* Fondo decorativo inferior */}
            <div className="absolute bottom-10 w-[80%] h-32 bg-secondary/20 rounded-3xl blur-xl"></div>
        </div>
    );
}
