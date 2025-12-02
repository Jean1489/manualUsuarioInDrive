export default function IndexPage({ setActivePage }) {
    const sections = [
        { id: "introduccion", name: "Introducción", desc: "Conceptos básicos del manual." },
        { id: "requisitos", name: "Requisitos Técnicos", desc: "Especificaciones necesarias para usar la app." },
        { id: "instalacion", name: "Instalación", desc: "Cómo descargar e instalar InDrive." },
        { id: "interfaz", name: "Interfaz de Usuario", desc: "Guía visual para navegar la app." },
        { id: "funciones", name: "Funciones Principales", desc: "Todas las herramientas clave de InDrive." },
        { id: "solucion-problemas", name: "Solución de Problemas", desc: "Resolver problemas frecuentes." },
        { id: "mantenimiento", name: "Mantenimiento y Actualizaciones", desc: "Mantén la app funcionando bien." },
        { id: "soporte", name: "Soporte y Contacto", desc: "Cómo recibir ayuda de InDrive." },
        { id: "glosario", name: "Glosario", desc: "Términos importantes explicados." },
        { id: "apendices", name: "Apéndices", desc: "Información adicional." },
    ];

    return (
        <div className="animate-fadeIn p-8">
            {/* Header */}
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-accent">
                    Índice General
                </h1>

                <p className="text-accent/70 mt-2 max-w-xl">
                    Explora cada sección del manual para conocer cómo funciona InDrive
                    y aprender a aprovechar todas sus herramientas.
                </p>
            </header>

            {/* Grid de tarjetas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {sections.map((sec, index) => (
                    <button
                        key={sec.id}
                        onClick={() => setActivePage(sec.id)}
                        className="
                            group p-6 rounded-xl border-2 border-secondary/30 bg-white shadow-sm
                            text-left transition-all duration-200 animate-fadeIn
                            hover:shadow-lg hover:border-secondary hover:bg-secondary/5
                            focus:outline-none focus:ring-2 focus:ring-secondary
                        "
                        style={{ animationDelay: `${index * 0.05}s` }}
                    >
                        {/* Número de sección */}
                        <div className="w-8 h-8 rounded-lg bg-secondary/10 text-secondary font-bold text-sm flex items-center justify-center mb-3 group-hover:bg-secondary group-hover:text-white transition-colors">
                            {index + 1}
                        </div>

                        {/* Título */}
                        <h3 className="text-lg font-semibold text-accent group-hover:text-secondary transition-colors">
                            {sec.name}
                        </h3>

                        {/* Descripción */}
                        <p className="text-accent/60 text-sm mt-2 leading-relaxed">
                            {sec.desc}
                        </p>

                        {/* CTA */}
                        <p className="text-secondary font-medium mt-4 flex items-center gap-1 group-hover:gap-2 transition-all">
                            Abrir sección
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </p>
                    </button>
                ))}
            </div>
        </div>
    );
}