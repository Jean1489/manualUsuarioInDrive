import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';

export default function GlosarioPage() {
    const [busqueda, setBusqueda] = useState('');
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todas');

    const términos = [
        {
            palabra: "Driver",
            definición: "Conductor registrado en la plataforma InDrive que ofrece servicios de transporte o delivery a través de la aplicación.",
            categoría: "usuarios"
        },
        {
            palabra: "Cliente",
            definición: "Usuario que solicita servicios de transporte o delivery a través de la plataforma InDrive.",
            categoría: "usuarios"
        },
        {
            palabra: "Tarifa dinámica",
            definición: "Sistema de precios flexible basado en la demanda y oferta en tiempo real, permitiendo a conductores y clientes negociar el precio del viaje.",
            categoría: "precios"
        },
        {
            palabra: "Match",
            definición: "Coincidencia exitosa entre un conductor y un cliente cuando ambos acuerdan los términos del viaje o servicio.",
            categoría: "proceso"
        },
        {
            palabra: "Rating",
            definición: "Calificación de 1 a 5 estrellas otorgada mutuamente por clientes y conductores después de completar un viaje, que ayuda a mantener la calidad del servicio.",
            categoría: "calidad"
        },
        {
            palabra: "Negociación de precio",
            definición: "Característica distintiva de InDrive que permite a clientes y conductores proponer y acordar el precio del servicio antes de iniciar el viaje.",
            categoría: "precios"
        },
        {
            palabra: "Viaje programado",
            definición: "Servicio que permite reservar un viaje con anticipación, especificando fecha, hora y destino.",
            categoría: "servicios"
        },
        {
            palabra: "Comisión",
            definición: "Porcentaje que InDrive cobra a los conductores por cada viaje completado a través de la plataforma.",
            categoría: "precios"
        },
        {
            palabra: "Verificación",
            definición: "Proceso de validación de identidad y documentos requerido tanto para conductores como para pasajeros para garantizar la seguridad.",
            categoría: "seguridad"
        },
        {
            palabra: "Modo seguro",
            definición: "Función que permite compartir detalles del viaje en tiempo real con contactos de confianza.",
            categoría: "seguridad"
        },
        {
            palabra: "Wallet",
            definición: "Billetera digital dentro de la app donde se gestiona el saldo, pagos y retiros.",
            categoría: "pagos"
        },
        {
            palabra: "Propina",
            definición: "Monto adicional opcional que los clientes pueden dar a los conductores por un buen servicio.",
            categoría: "pagos"
        },
        {
            palabra: "Zona de cobertura",
            definición: "Área geográfica donde InDrive ofrece sus servicios activamente.",
            categoría: "servicios"
        },
        {
            palabra: "Cancelación",
            definición: "Acción de anular un viaje ya solicitado o aceptado. Puede generar penalizaciones según el tiempo y frecuencia.",
            categoría: "proceso"
        },
        {
            palabra: "Soporte",
            definición: "Servicio de atención al cliente disponible para resolver dudas, problemas o incidencias.",
            categoría: "ayuda"
        }
    ];

    const categorías = [
        { valor: 'todas', etiqueta: 'Todas' },
        { valor: 'usuarios', etiqueta: 'Usuarios' },
        { valor: 'precios', etiqueta: 'Precios' },
        { valor: 'servicios', etiqueta: 'Servicios' },
        { valor: 'proceso', etiqueta: 'Proceso' },
        { valor: 'seguridad', etiqueta: 'Seguridad' },
        { valor: 'pagos', etiqueta: 'Pagos' },
        { valor: 'calidad', etiqueta: 'Calidad' },
        { valor: 'ayuda', etiqueta: 'Ayuda' }
    ];

    const términosFiltrados = useMemo(() => {
        return términos.filter(t => {
            const coincideBusqueda = t.palabra.toLowerCase().includes(busqueda.toLowerCase()) ||
                t.definición.toLowerCase().includes(busqueda.toLowerCase());
            const coincideCategoria = categoriaSeleccionada === 'todas' || t.categoría === categoriaSeleccionada;
            return coincideBusqueda && coincideCategoria;
        }).sort((a, b) => a.palabra.localeCompare(b.palabra));
    }, [busqueda, categoriaSeleccionada, términos]);

    return (
        <div className="p-6 animate-fadeIn">
            {/* Encabezado */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold mb-2 text-accent">Glosario InDrive</h1>
                <p className="text-gray-700">
                    Explora y comprende los términos clave de la plataforma
                </p>
            </div>

            {/* Barra de búsqueda */}
            <div className="mb-5 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                    type="text"
                    placeholder="Buscar término..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-white border-2 border-secondary/30 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                />
            </div>

            {/* Filtro de categorías */}
            <div className="mb-5 flex flex-wrap gap-2">
                {categorías.map(cat => (
                    <button
                        key={cat.valor}
                        onClick={() => setCategoriaSeleccionada(cat.valor)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${categoriaSeleccionada === cat.valor
                                ? 'bg-accent text-primary shadow-md'
                                : 'bg-secondary/20 text-accent hover:bg-secondary/30 border border-secondary/40'
                            }`}
                    >
                        {cat.etiqueta}
                    </button>
                ))}
            </div>

            {/* Contador de resultados */}
            <div className="mb-4 text-sm text-gray-600 font-medium">
                {términosFiltrados.length} {términosFiltrados.length === 1 ? 'término encontrado' : 'términos encontrados'}
            </div>

            {/* Lista de términos */}
            <dl className="space-y-4">
                {términosFiltrados.length > 0 ? (
                    términosFiltrados.map((t, idx) => (
                        <div
                            key={idx}
                            className="bg-secondary/10 p-5 rounded-lg shadow-sm hover:shadow-md hover:bg-secondary/15 transition-all border border-secondary/20 animate-slideIn"
                            style={{ animationDelay: `${idx * 0.05}s` }}
                        >
                            <div className="flex items-start justify-between mb-2 gap-3">
                                <dt className="font-bold text-xl text-accent">{t.palabra}</dt>
                                <span className="px-3 py-1 text-xs font-semibold bg-secondary text-primary rounded-full whitespace-nowrap">
                                    {categorías.find(c => c.valor === t.categoría)?.etiqueta}
                                </span>
                            </div>
                            <dd className="text-gray-700 leading-relaxed">{t.definición}</dd>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-12 bg-secondary/10 rounded-lg border-2 border-secondary/30">
                        <p className="text-gray-600 text-lg mb-4">No se encontraron términos que coincidan con tu búsqueda</p>
                        <button
                            onClick={() => {
                                setBusqueda('');
                                setCategoriaSeleccionada('todas');
                            }}
                            className="px-6 py-2.5 bg-accent text-primary font-semibold rounded-lg hover:bg-highlight-dark transition-colors shadow-md"
                        >
                            Limpiar filtros
                        </button>
                    </div>
                )}
            </dl>
        </div>
    );
}