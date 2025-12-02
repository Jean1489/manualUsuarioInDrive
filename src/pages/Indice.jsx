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
                <h1 className="text-3xl font-bold text-neutral-900">
                    Índice General
                </h1>

                <p className="text-neutral-600 mt-2 max-w-xl">
                    Explora cada sección del manual para conocer cómo funciona InDrive
                    y aprender a aprovechar todas sus herramientas.
                </p>
            </header>

            {/* Grid de tarjetas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {sections.map((sec) => (
                    <button
                        key={sec.id}
                        onClick={() => setActivePage(sec.id)}
                        className="
                            group p-6 rounded-xl border border-neutral-200 bg-white shadow-sm
                            text-left transition-all duration-200 animate-fadeIn
                            hover:shadow-md hover:border-indrive hover:bg-indrive/10
                            focus:outline-none focus:ring-2 focus:ring-indrive
                        "
                    >
                        {/* Título */}
                        <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-indrive transition-colors">
                            {sec.name}
                        </h3>

                        {/* Descripción */}
                        <p className="text-neutral-500 text-sm mt-1">
                            {sec.desc}
                        </p>

                        {/* CTA */}
                        <p className="text-indrive font-medium mt-3 flex items-center gap-1">
                            Abrir sección →
                        </p>
                    </button>
                ))}
            </div>
        </div>
    );
}
