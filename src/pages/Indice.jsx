export default function IndexPage({ setActivePage }) {
    const sections = [
        { id: "introduccion", name: "Introducción" },
        { id: "requisitos", name: "Requisitos Técnicos" },
        { id: "instalacion", name: "Instalación" },
        { id: "interfaz", name: "Interfaz de Usuario" },
        { id: "funciones", name: "Funciones Principales" },
        { id: "solucion-problemas", name: "Solución de Problemas" },
        { id: "mantenimiento", name: "Mantenimiento y Actualizaciones" },
        { id: "soporte", name: "Soporte y Contacto" },
        { id: "glosario", name: "Glosario" },
        { id: "apendices", name: "Apéndices" },
    ];

    return (
        <div className="animate-fadeIn p-8">
            <h1 className="text-3xl font-bold text-neutral-900 mb-4">Índice</h1>
            <p className="text-neutral-600 mb-8">
                Selecciona una sección para navegar por el manual de usuario.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                {sections.map((sec) => (
                    <button
                        key={sec.id}
                        onClick={() => setActivePage(sec.id)}
                        className="
              p-5 bg-white rounded-xl border border-neutral-200 shadow-sm
              hover:bg-indrive/10 hover:border-indrive transition-all
              text-left animate-fadeIn
            "
                    >
                        <h3 className="text-lg font-semibold text-neutral-900">
                            {sec.name}
                        </h3>
                        <p className="text-neutral-500 text-sm mt-1">
                            Ver sección →
                        </p>
                    </button>
                ))}

            </div>
        </div>
    );
}
