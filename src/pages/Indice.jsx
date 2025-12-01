export default function Indice({ onNavigate }) {

    const items = [
        { id: "portada", label: "Portada" },
        { id: "introduccion", label: "Introducción" },
        { id: "requisitos", label: "Requisitos" },
        { id: "instalacion", label: "Instalación" },
        { id: "interfaz", label: "Interfaz" },
        { id: "funciones", label: "Funciones" },
        { id: "solucion-problemas", label: "Solución de Problemas" },
        { id: "mantenimiento", label: "Mantenimiento" },
        { id: "soporte", label: "Soporte" },
        { id: "glosario", label: "Glosario" },
        { id: "apendices", label: "Apéndices" },
    ];

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-green-700 mb-6">
                Índice del Manual
            </h1>

            <div className="space-y-3">
                {items.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onNavigate(item.id)}
                        className="
                            block w-full text-left px-4 py-3 bg-white
                            border rounded-lg shadow-sm hover:bg-green-50
                            transition text-gray-700 font-medium
                        "
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
