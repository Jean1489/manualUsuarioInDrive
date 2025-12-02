import { Smartphone, Wifi, Download, ShieldCheck } from "lucide-react";

export default function RequisitosPage() {
    return (
        <div className="animate-fadeIn px-6 py-10">

            {/* TÍTULO PRINCIPAL */}
            <h1 className="text-3xl font-bold text-accent mb-2">
                Requisitos Técnicos
            </h1>
            <p className="text-neutral-700 mb-8">
                Para garantizar un funcionamiento óptimo de InDrive Driver, asegúrate de
                cumplir los requisitos mínimos según tu dispositivo.
            </p>

            {/* --------------------------------------- */}
            {/* ANDROID */}
            {/* --------------------------------------- */}
            <div className="bg-primary rounded-2xl p-6 shadow-sm border border-secondary/40 mb-6 animate-slideIn">

                <div className="flex items-center gap-3 mb-3">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg"
                        alt="Android"
                        className="w-8 h-8"
                    />
                    <h2 className="text-xl font-semibold text-secondary">
                        Android – Requisitos Mínimos
                    </h2>
                </div>

                <ul className="space-y-2 text-neutral-700 mb-4">
                    <li>• Sistema operativo Android 7.0 o superior.</li>
                    <li>• 2 GB de RAM mínimo (4 GB recomendado).</li>
                    <li>• 200 MB de almacenamiento libre.</li>
                    <li>• GPS funcionando correctamente.</li>
                    <li>• Servicios de Google Play actualizados.</li>
                </ul>

                {/* Botón de descarga */}
                <a
                    href="https://play.google.com/store"
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-secondary text-white px-4 py-2 rounded-lg shadow hover:bg-accent transition-all"
                >
                    <Download size={18} />
                    Descargar desde Google Play
                </a>
            </div>

            {/* --------------------------------------- */}
            {/* iOS */}
            {/* --------------------------------------- */}
            <div className="bg-primary rounded-2xl p-6 shadow-sm border border-secondary/40 mb-6 animate-slideIn">

                <div className="flex items-center gap-3 mb-3">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                        alt="Apple iOS"
                        className="w-8 h-8"
                    />
                    <h2 className="text-xl font-semibold text-secondary">
                        iOS – Requisitos Mínimos
                    </h2>
                </div>

                <ul className="space-y-2 text-neutral-700 mb-4">
                    <li>• iOS 13 o superior.</li>
                    <li>• iPhone 6s o modelos posteriores.</li>
                    <li>• 200 MB de espacio disponible.</li>
                    <li>• GPS habilitado.</li>
                    <li>• Conexión a internet estable (Wi-Fi o datos).</li>
                </ul>

                {/* Botón de descarga */}
                <a
                    href="https://apps.apple.com"
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-secondary text-white px-4 py-2 rounded-lg shadow hover:bg-accent transition-all"
                >
                    <Download size={18} />
                    Descargar en App Store
                </a>
            </div>

            {/* --------------------------------------- */}
            {/* CONECTIVIDAD */}
            {/* --------------------------------------- */}
            <div className="bg-primary rounded-2xl p-6 shadow-sm border border-secondary/40 mb-6 animate-slideIn">
                <div className="flex items-center gap-3 mb-3">
                    <Wifi className="text-accent" size={26} />
                    <h2 className="text-xl font-semibold text-secondary">
                        Conectividad
                    </h2>
                </div>

                <ul className="space-y-2 text-neutral-700">
                    <li>• Conexión móvil 4G o superior.</li>
                    <li>• Datos móviles activos durante toda la sesión.</li>
                    <li>• Permitir ubicación en segundo plano.</li>
                </ul>
            </div>

            {/* --------------------------------------- */}
            {/* PERMISOS NECESARIOS */}
            {/* --------------------------------------- */}
            <div className="bg-primary rounded-2xl p-6 shadow-sm border border-secondary/40 mb-6 animate-slideIn">
                <div className="flex items-center gap-3 mb-3">
                    <ShieldCheck className="text-accent" size={26} />
                    <h2 className="text-xl font-semibold text-secondary">
                        Permisos Necesarios
                    </h2>
                </div>

                <ul className="space-y-2 text-neutral-700">
                    <li>• GPS en tiempo real.</li>
                    <li>• Acceso a internet móvil o Wi-Fi.</li>
                    <li>• Permiso para notificaciones.</li>
                    <li>• Permiso para llamadas.</li>
                </ul>
            </div>

            {/* Nota Final */}
            <div className="mt-8 bg-secondary/20 border border-secondary rounded-xl p-4">
                <p className="text-accent text-sm font-medium">
                    *Si tu dispositivo no cumple con los requisitos mínimos,
                    la aplicación puede presentar fallos o cierres inesperados.*
                </p>
            </div>
        </div>
    );
}
