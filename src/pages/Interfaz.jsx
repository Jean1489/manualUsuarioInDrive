import { useState } from 'react';
import { User, Car, MapPin, CreditCard, Clock, MessageCircle, Star, Navigation, Menu, Bell, Wallet, Settings } from 'lucide-react';
import pantallaPrincipalPasajero from '../assets/pantalla-principal.png';
import pantallaPrincipalConductor from '../assets/pantalla-principal-conductor.jpg';
import negociacionPasajero from '../assets/negociacion.jpg';

export default function InterfazPage() {
    const [vistaActiva, setVistaActiva] = useState('pasajero');

    const elementosInterfazPasajero = [
        {
            titulo: "Pantalla Principal",
            descripcion: "Vista inicial donde solicitas tu viaje y ves tu ubicación actual",
            imagen: pantallaPrincipalPasajero,
            elementos: [
                { icono: <MapPin className="w-4 h-4" />, nombre: "Mapa interactivo", detalle: "Muestra tu ubicación actual y puedes seleccionar tu destino directamente en el mapa" },
                { icono: <MapPin className="w-4 h-4" />, nombre: "Buscador de direcciones", detalle: "Ingresa tu punto de recogida y destino con autocompletado inteligente" },
                { icono: <Clock className="w-4 h-4" />, nombre: "Viaje programado", detalle: "Opción para reservar un viaje para más tarde (fecha y hora específica)" },
                { icono: <CreditCard className="w-4 h-4" />, nombre: "Selector de precio", detalle: "Propone tu precio para el viaje basándote en la distancia y demanda" }
            ]
        },
        {
            titulo: "Negociación de Viaje",
            descripcion: "Pantalla donde propones tu precio y esperas respuestas de conductores",
            imagen: negociacionPasajero,
            elementos: [
                { icono: <User className="w-4 h-4" />, nombre: "Lista de conductores", detalle: "Ver conductores disponibles que respondieron a tu solicitud con sus contraoferta" },
                { icono: <Star className="w-4 h-4" />, nombre: "Calificación del conductor", detalle: "Rating promedio, número de viajes completados y comentarios de otros pasajeros" },
                { icono: <Car className="w-4 h-4" />, nombre: "Información del vehículo", detalle: "Modelo, color, placas y foto del auto del conductor" },
                { icono: <Clock className="w-4 h-4" />, nombre: "Tiempo de llegada", detalle: "Estimado de cuántos minutos tardará el conductor en recogerte" }
            ]
        },
        // Agrega las demás secciones con su respectiva imagen
    ];

    const elementosInterfazConductor = [
        {
            titulo: "Pantalla Principal",
            descripcion: "Vista de inicio donde activas tu disponibilidad y recibes solicitudes",
            imagen: pantallaPrincipalConductor,
            elementos: [
                { icono: <MapPin className="w-4 h-4" />, nombre: "Mapa en vivo", detalle: "Muestra tu ubicación actual y zonas de alta demanda en tiempo real" },
                { icono: <Car className="w-4 h-4" />, nombre: "Estado del conductor", detalle: "Cambia entre Disponible, Ocupado o Fuera de línea con un toque" },
                { icono: <Navigation className="w-4 h-4" />, nombre: "Navegación integrada", detalle: "Acceso rápido a Google Maps o Waze para mejores rutas" },
                { icono: <Wallet className="w-4 h-4" />, nombre: "Panel de ganancias", detalle: "Resumen de ingresos del día, semana y promociones activas" }
            ]
        },
        // Agrega las demás secciones con su respectiva imagen
    ];

    const elementosActuales = vistaActiva === 'pasajero' ? elementosInterfazPasajero : elementosInterfazConductor;

    return (
        <div className="p-6 animate-fadeIn">
            {/* Encabezado */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold mb-2 text-accent">Interfaz de Usuario</h1>
                <p className="text-gray-700">
                    Conoce la interfaz de InDrive y aprende a navegar por todas sus funciones
                </p>
            </div>

            {/* Selector de vista */}
            <div className="mb-6 flex gap-3">
                <button
                    onClick={() => setVistaActiva('pasajero')}
                    className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${vistaActiva === 'pasajero'
                        ? 'bg-accent text-primary shadow-md'
                        : 'bg-secondary/20 text-accent hover:bg-secondary/30 border border-secondary/40'
                        }`}
                >
                    <User className="w-5 h-5" />
                    Vista Pasajero
                </button>
                <button
                    onClick={() => setVistaActiva('conductor')}
                    className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${vistaActiva === 'conductor'
                        ? 'bg-accent text-primary shadow-md'
                        : 'bg-secondary/20 text-accent hover:bg-secondary/30 border border-secondary/40'
                        }`}
                >
                    <Car className="w-5 h-5" />
                    Vista Conductor
                </button>
            </div>

            {/* Descripción */}
            <div className="mb-6 p-4 bg-secondary/15 border-l-4 border-secondary rounded-lg">
                <p className="text-gray-700">
                    {vistaActiva === 'pasajero'
                        ? 'Interfaz diseñada para solicitar viajes de manera rápida y segura, con control total sobre el precio y seguimiento en tiempo real'
                        : 'Interfaz optimizada para conductores con herramientas de navegación, gestión de ganancias y comunicación con pasajeros'}
                </p>
            </div>

            {/* Secciones */}
            <div className="space-y-6">
                {elementosActuales.map((seccion, idx) => (
                    <div
                        key={idx}
                        className="bg-secondary/10 rounded-lg border border-secondary/20 overflow-hidden animate-slideIn"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                        <div className="p-5">
                            <h2 className="text-2xl font-bold text-accent mb-2">{seccion.titulo}</h2>
                            <p className="text-gray-700 mb-4">{seccion.descripcion}</p>

                            {/* Contenedor principal: imagen + elementos */}
                            <div className="flex flex-col lg:flex-row gap-6 items-start">
                                {/* Lista de elementos */}
                                <div className="flex-1 grid gap-3">
                                    {seccion.elementos.map((elemento, elemIdx) => (
                                        <div
                                            key={elemIdx}
                                            className="bg-white p-4 rounded-lg border border-secondary/20 hover:bg-primary/50 transition-colors"
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className="p-2 bg-secondary/20 text-secondary rounded-lg flex-shrink-0">
                                                    {elemento.icono}
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-semibold text-accent mb-1">{elemento.nombre}</h3>
                                                    <p className="text-sm text-gray-600">{elemento.detalle}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Imagen */}
                                {seccion.imagen && (
                                    <div className="lg:w-80 w-full flex justify-center lg:justify-start flex-shrink-0">
                                        <img
                                            src={seccion.imagen}
                                            alt={seccion.titulo}
                                            className="w-full max-w-xs h-auto rounded-xl border-2 border-secondary/30 shadow-lg"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Tips finales */}
            <div className="mt-8 p-5 bg-secondary/10 border-l-4 border-secondary rounded-lg">
                <h3 className="font-semibold text-accent text-lg mb-2 flex items-center gap-2">
                    <Bell className="w-5 h-5" />
                    Consejo importante
                </h3>
                <p className="text-gray-700 leading-relaxed">
                    Mantén tu app actualizada para acceder a las últimas mejoras de interfaz y nuevas funciones.
                    La experiencia de usuario se optimiza constantemente para hacer InDrive más intuitivo y eficiente.
                </p>
            </div>
        </div>
    );
}
