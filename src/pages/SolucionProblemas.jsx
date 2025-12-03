import { useState } from 'react';
import { Search, ChevronDown, ChevronUp, AlertCircle, CheckCircle, Wifi, MapPin, CreditCard, Bell, User, Phone, Settings, Smartphone } from 'lucide-react';

export default function SolucionProblemas() {
    const [busqueda, setBusqueda] = useState('');
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todos');
    const [problemaAbierto, setProblemaAbierto] = useState(null);

    const toggleProblema = (idx) => {
        setProblemaAbierto(problemaAbierto === idx ? null : idx);
    };

    const problemas = [
        {
            pregunta: "No puedo iniciar sesión",
            categoria: "cuenta",
            icono: <User className="w-5 h-5" />,
            sintomas: ["Credenciales incorrectas", "Error al iniciar sesión", "No puedo acceder a mi cuenta"],
            solucion: {
                descripcion: "Sigue estos pasos para recuperar el acceso a tu cuenta:",
                pasos: [
                    "Verifica que tu conexión a internet sea estable",
                    "Confirma que tu número de teléfono o email sean correctos",
                    "Intenta usar 'Olvidé mi contraseña' para restablecerla",
                    "Verifica que no tengas espacios al inicio o final de tu contraseña",
                    "Si el problema persiste, desinstala y reinstala la app"
                ]
            },
            prevencion: "Guarda tus credenciales en un lugar seguro y mantén actualizada tu información de contacto"
        },
        {
            pregunta: "La aplicación se cierra inesperadamente",
            categoria: "tecnico",
            icono: <Smartphone className="w-5 h-5" />,
            sintomas: ["App se cierra sola", "Crashes frecuentes", "Pantalla negra al abrir"],
            solucion: {
                descripcion: "Soluciona problemas de estabilidad de la aplicación:",
                pasos: [
                    "Verifica que tengas la última versión de InDrive instalada",
                    "Ve a Configuración → Apps → InDrive → Limpiar caché",
                    "Reinicia tu dispositivo",
                    "Si el problema continúa, desinstala completamente la app",
                    "Reinstala InDrive desde Play Store o App Store",
                    "Verifica que tu sistema operativo esté actualizado"
                ]
            },
            prevencion: "Mantén siempre actualizada la app y tu sistema operativo, limpia la caché regularmente"
        },
        {
            pregunta: "No encuentro conductores cercanos",
            categoria: "viaje",
            icono: <MapPin className="w-5 h-5" />,
            sintomas: ["No hay conductores disponibles", "Nadie acepta mi viaje", "Búsqueda sin resultados"],
            solucion: {
                descripcion: "Aumenta tus posibilidades de encontrar un conductor:",
                pasos: [
                    "Verifica que tu GPS esté activado y funcione correctamente",
                    "Asegúrate de tener permisos de ubicación activados para InDrive",
                    "Ajusta el precio ofrecido según la demanda del momento",
                    "Intenta buscar en horarios de mayor actividad (7-9am, 5-8pm)",
                    "Expande ligeramente tu radio de búsqueda",
                    "Verifica que tu ubicación en el mapa sea correcta"
                ]
            },
            prevencion: "Ofrece precios justos según la distancia y horario, ten paciencia en zonas con baja demanda"
        },
        {
            pregunta: "Problemas con el GPS o ubicación incorrecta",
            categoria: "tecnico",
            icono: <MapPin className="w-5 h-5" />,
            sintomas: ["Ubicación imprecisa", "GPS no funciona", "Mapa no carga"],
            solucion: {
                descripcion: "Mejora la precisión de tu ubicación:",
                pasos: [
                    "Activa el GPS en Configuración de tu dispositivo",
                    "Ve a Configuración → Apps → InDrive → Permisos → Ubicación → 'Permitir siempre'",
                    "Activa 'Alta precisión' en configuración de ubicación",
                    "Sal a un espacio abierto para mejor señal GPS",
                    "Reinicia el GPS: desactívalo y actívalo nuevamente",
                    "Limpia la caché de servicios de Google Play (Android)"
                ]
            },
            prevencion: "Mantén los servicios de ubicación siempre activos, evita usar la app en lugares cerrados"
        },
        {
            pregunta: "Error al procesar el pago",
            categoria: "pago",
            icono: <CreditCard className="w-5 h-5" />,
            sintomas: ["Pago rechazado", "Tarjeta no válida", "Error en transacción"],
            solucion: {
                descripcion: "Resuelve problemas con métodos de pago:",
                pasos: [
                    "Verifica que tu tarjeta tenga fondos suficientes",
                    "Confirma que los datos de la tarjeta estén correctos",
                    "Verifica la fecha de vencimiento de tu tarjeta",
                    "Intenta con otro método de pago (otra tarjeta o efectivo)",
                    "Contacta a tu banco para verificar que no haya bloqueos",
                    "Elimina y vuelve a agregar el método de pago en la app"
                ]
            },
            prevencion: "Mantén tus métodos de pago actualizados, verifica límites de transacción con tu banco"
        },
        {
            pregunta: "No recibo notificaciones",
            categoria: "tecnico",
            icono: <Bell className="w-5 h-5" />,
            sintomas: ["Sin notificaciones de viajes", "No llegan alertas", "Mensajes no aparecen"],
            solucion: {
                descripcion: "Activa las notificaciones correctamente:",
                pasos: [
                    "Ve a Configuración del dispositivo → Apps → InDrive → Notificaciones",
                    "Activa 'Permitir notificaciones'",
                    "Dentro de InDrive, ve a Configuración → Notificaciones",
                    "Activa las notificaciones importantes: viajes, mensajes, ofertas",
                    "Verifica que InDrive no esté en modo 'No molestar'",
                    "Desactiva optimización de batería para InDrive"
                ]
            },
            prevencion: "Revisa la configuración de notificaciones después de cada actualización del sistema"
        },
        {
            pregunta: "La app está lenta o tarda en cargar",
            categoria: "tecnico",
            icono: <Settings className="w-5 h-5" />,
            sintomas: ["App muy lenta", "Demora en cargar", "Responde con retraso"],
            solucion: {
                descripcion: "Optimiza el rendimiento de la aplicación:",
                pasos: [
                    "Limpia la caché: Configuración → Apps → InDrive → Limpiar caché",
                    "Cierra apps en segundo plano que consuman recursos",
                    "Verifica que tengas al menos 500MB de espacio libre",
                    "Reinicia tu dispositivo",
                    "Verifica tu conexión a internet (cambia entre WiFi y datos móviles)",
                    "Si persiste, considera reinstalar la app"
                ]
            },
            prevencion: "Limpia la caché mensualmente, mantén espacio de almacenamiento disponible"
        },
        {
            pregunta: "No puedo contactar al conductor/pasajero",
            categoria: "viaje",
            icono: <Phone className="w-5 h-5" />,
            sintomas: ["Llamada no funciona", "Chat no responde", "No puedo enviar mensajes"],
            solucion: {
                descripcion: "Restablece la comunicación:",
                pasos: [
                    "Verifica que tengas conexión a internet estable",
                    "Intenta llamar nuevamente desde la app",
                    "Usa el chat en lugar de llamadas si no funciona",
                    "Verifica que tengas permisos de teléfono activados",
                    "Reinicia la app y vuelve a intentar",
                    "Si el problema persiste, contacta a soporte inmediatamente"
                ]
            },
            prevencion: "Prueba la función de llamada antes de iniciar el viaje, mantén tu app actualizada"
        },
        {
            pregunta: "Mi cuenta fue suspendida o bloqueada",
            categoria: "cuenta",
            icono: <AlertCircle className="w-5 h-5" />,
            sintomas: ["No puedo acceder", "Cuenta suspendida", "Mensaje de bloqueo"],
            solucion: {
                descripcion: "Pasos para resolver suspensiones de cuenta:",
                pasos: [
                    "Lee el mensaje de suspensión para entender el motivo",
                    "Ve a InDrive → Configuración → Soporte",
                    "Explica tu situación y solicita revisión del caso",
                    "Proporciona toda la información solicitada",
                    "Espera respuesta del equipo de soporte (24-48h)",
                    "Si fue un error, tu cuenta será reactivada"
                ]
            },
            prevencion: "Sigue las normas de la comunidad, mantén calificaciones positivas, no canceles viajes frecuentemente"
        },
        {
            pregunta: "Cobro incorrecto o duplicado",
            categoria: "pago",
            icono: <CreditCard className="w-5 h-5" />,
            sintomas: ["Me cobraron de más", "Doble cobro", "Precio diferente al acordado"],
            solucion: {
                descripcion: "Disputa un cobro incorrecto:",
                pasos: [
                    "Ve a tu historial de viajes y localiza el viaje en cuestión",
                    "Toca 'Reportar problema' o 'Disputar cobro'",
                    "Toma captura de pantalla del precio acordado y cobrado",
                    "Explica detalladamente la discrepancia",
                    "Contacta a soporte con toda la evidencia",
                    "Espera resolución (generalmente en 3-5 días hábiles)"
                ]
            },
            prevencion: "Verifica el precio final antes de confirmar, guarda capturas de la negociación"
        }
    ];

    const categorias = [
        { valor: 'todos', etiqueta: 'Todos', icono: <Settings className="w-4 h-4" /> },
        { valor: 'cuenta', etiqueta: 'Cuenta', icono: <User className="w-4 h-4" /> },
        { valor: 'tecnico', etiqueta: 'Técnico', icono: <Smartphone className="w-4 h-4" /> },
        { valor: 'viaje', etiqueta: 'Viajes', icono: <MapPin className="w-4 h-4" /> },
        { valor: 'pago', etiqueta: 'Pagos', icono: <CreditCard className="w-4 h-4" /> }
    ];

    const problemasFiltrados = problemas.filter(p => {
        const coincideBusqueda = p.pregunta.toLowerCase().includes(busqueda.toLowerCase()) ||
            p.sintomas.some(s => s.toLowerCase().includes(busqueda.toLowerCase()));
        const coincideCategoria = categoriaSeleccionada === 'todos' || p.categoria === categoriaSeleccionada;
        return coincideBusqueda && coincideCategoria;
    });

    return (
        <div className="p-6 animate-fadeIn">
            {/* Encabezado */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold mb-2 text-accent">Solución de Problemas</h1>
                <p className="text-gray-700">
                    Encuentra soluciones rápidas y efectivas a los problemas más comunes de InDrive
                </p>
            </div>

            {/* Banner de ayuda rápida */}
            <div className="mb-6 p-4 bg-secondary/15 border-l-4 border-secondary rounded-lg flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                    <p className="font-semibold text-accent">Ayuda paso a paso</p>
                    <p className="text-sm text-gray-700">
                        Cada problema incluye soluciones detalladas y medidas preventivas para evitar que vuelva a ocurrir
                    </p>
                </div>
            </div>

            {/* Barra de búsqueda */}
            <div className="mb-5 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                    type="text"
                    placeholder="Buscar problema o síntoma..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-white border-2 border-secondary/30 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                />
            </div>

            {/* Filtro de categorías */}
            <div className="mb-5 flex flex-wrap gap-2">
                {categorias.map(cat => (
                    <button
                        key={cat.valor}
                        onClick={() => setCategoriaSeleccionada(cat.valor)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${categoriaSeleccionada === cat.valor
                                ? 'bg-accent text-primary shadow-md'
                                : 'bg-secondary/20 text-accent hover:bg-secondary/30 border border-secondary/40'
                            }`}
                    >
                        {cat.icono}
                        {cat.etiqueta}
                    </button>
                ))}
            </div>

            {/* Contador de resultados */}
            <div className="mb-4 text-sm text-gray-600 font-medium">
                {problemasFiltrados.length} {problemasFiltrados.length === 1 ? 'problema encontrado' : 'problemas encontrados'}
            </div>

            {/* Lista de problemas */}
            <div className="space-y-4">
                {problemasFiltrados.length > 0 ? (
                    problemasFiltrados.map((problema, idx) => (
                        <div
                            key={idx}
                            className="bg-secondary/10 rounded-lg border border-secondary/20 overflow-hidden animate-slideIn"
                            style={{ animationDelay: `${idx * 0.05}s` }}
                        >
                            {/* Header del problema */}
                            <button
                                onClick={() => toggleProblema(idx)}
                                className="w-full p-5 flex items-center justify-between hover:bg-secondary/15 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-secondary text-primary rounded-lg">
                                        {problema.icono}
                                    </div>
                                    <div className="text-left">
                                        <h3 className="font-bold text-lg text-accent">{problema.pregunta}</h3>
                                        <p className="text-sm text-gray-600">
                                            Síntomas: {problema.sintomas.join(' • ')}
                                        </p>
                                    </div>
                                </div>
                                {problemaAbierto === idx ? (
                                    <ChevronUp className="w-5 h-5 text-accent flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-accent flex-shrink-0" />
                                )}
                            </button>

                            {/* Contenido expandible */}
                            {problemaAbierto === idx && (
                                <div className="p-5 pt-0 space-y-4 animate-fadeIn">
                                    {/* Solución */}
                                    <div className="bg-white p-4 rounded-lg border border-secondary/20">
                                        <h4 className="font-semibold text-accent mb-2 flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-600" />
                                            Solución
                                        </h4>
                                        <p className="text-gray-700 mb-3">{problema.solucion.descripcion}</p>
                                        <ol className="space-y-2">
                                            {problema.solucion.pasos.map((paso, pasoIdx) => (
                                                <li key={pasoIdx} className="flex items-start gap-2 text-sm text-gray-700">
                                                    <span className="font-bold text-secondary flex-shrink-0 mt-0.5">
                                                        {pasoIdx + 1}.
                                                    </span>
                                                    <span>{paso}</span>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>

                                    {/* Prevención */}
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                                        <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                                            <AlertCircle className="w-5 h-5" />
                                            Cómo prevenir este problema
                                        </h4>
                                        <p className="text-sm text-blue-900">{problema.prevencion}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <div className="text-center py-12 bg-secondary/10 rounded-lg border-2 border-secondary/30">
                        <p className="text-gray-600 text-lg mb-4">No se encontraron problemas que coincidan con tu búsqueda</p>
                        <button
                            onClick={() => {
                                setBusqueda('');
                                setCategoriaSeleccionada('todos');
                            }}
                            className="px-6 py-2.5 bg-accent text-primary font-semibold rounded-lg hover:bg-highlight-dark transition-colors shadow-md"
                        >
                            Limpiar filtros
                        </button>
                    </div>
                )}
            </div>

            {/* Footer de ayuda adicional */}
            <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                    <p className="font-semibold text-yellow-800">¿No encontraste solución?</p>
                    <p className="text-sm text-yellow-700">
                        Si ninguna de estas soluciones funciona, contacta directamente a nuestro equipo de soporte en la sección de Soporte
                    </p>
                </div>
            </div>
        </div>
    );
}