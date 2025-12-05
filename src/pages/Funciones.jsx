import { MapPin, Truck, CreditCard, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import CiudadCiudad from '../assets/CiudadCiudad.jpg';
import Flete from '../assets/Flete.jpg';
import MetodosPago from '../assets/MetodosPago.jpg';
import Seguridad from '../assets/Seguridad.jpg';

export default function FuncionesPage() {
    const funciones = [
        {
            id: 1,
            titulo: "Ciudad a Ciudad",
            descripcion: "Viaja entre ciudades de manera cómoda y segura con InDrive",
            icono: <MapPin className="w-12 h-12" />,
            imagen: CiudadCiudad,
            color: "from-blue-500 to-blue-600",
            caracteristicas: [
                "Conecta con conductores que viajan a tu destino",
                "Negocia el precio según la distancia",
                "Ideal para viajes largos entre ciudades",
                "Programa tu viaje con anticipación",
                "Comparte gastos con otros pasajeros"
            ],
            beneficios: [
                { icono: <CheckCircle className="w-4 h-4" />, texto: "Más económico que otros servicios" },
                { icono: <CheckCircle className="w-4 h-4" />, texto: "Conductores verificados" },
                { icono: <CheckCircle className="w-4 h-4" />, texto: "Flexibilidad de horarios" }
            ]
        },
        {
            id: 2,
            titulo: "Flete",
            descripcion: "Transporta paquetes, mudanzas o carga de forma eficiente",
            icono: <Truck className="w-12 h-12" />,
            imagen: Flete,
            color: "from-orange-500 to-orange-600",
            caracteristicas: [
                "Envía paquetes, documentos o equipaje",
                "Servicio de mudanza con vehículos adecuados",
                "Negocia el precio según el tamaño de la carga",
                "Seguimiento en tiempo real de tu envío",
                "Variedad de vehículos disponibles"
            ],
            beneficios: [
                { icono: <CheckCircle className="w-4 h-4" />, texto: "Transporta cualquier tipo de carga" },
                { icono: <CheckCircle className="w-4 h-4" />, texto: "Precios transparentes" },
                { icono: <CheckCircle className="w-4 h-4" />, texto: "Servicio rápido y confiable" }
            ]
        },
        {
            id: 3,
            titulo: "Métodos de Pago",
            descripcion: "Paga de la forma que prefieras con total seguridad",
            icono: <CreditCard className="w-12 h-12" />,
            imagen: MetodosPago,
            color: "from-green-500 to-green-600",
            caracteristicas: [
                "Pago en efectivo directamente al conductor",
                "Tarjetas de crédito y débito",
                "Billetera digital InDrive",
                "Transferencias bancarias",
                "Recibos digitales automáticos"
            ],
            beneficios: [
                { icono: <CheckCircle className="w-4 h-4" />, texto: "Máxima flexibilidad" },
                { icono: <CheckCircle className="w-4 h-4" />, texto: "Transacciones seguras" },
                { icono: <CheckCircle className="w-4 h-4" />, texto: "Sin cargos ocultos" }
            ]
        },
        {
            id: 4,
            titulo: "Seguridad",
            descripcion: "Tu seguridad es nuestra prioridad con herramientas de protección",
            icono: <Shield className="w-12 h-12" />,
            imagen: Seguridad,
            color: "from-red-500 to-red-600",
            caracteristicas: [
                "Botón de emergencia con conexión directa",
                "Compartir viaje en tiempo real",
                "Verificación de identidad de conductores",
                "Soporte 24/7 disponible",
                "Seguimiento GPS durante todo el viaje"
            ],
            beneficios: [
                { icono: <CheckCircle className="w-4 h-4" />, texto: "Asistencia inmediata" },
                { icono: <CheckCircle className="w-4 h-4" />, texto: "Viajes rastreables" },
                { icono: <CheckCircle className="w-4 h-4" />, texto: "Conductores certificados" }
            ]
        }
    ];

    return (
        <div className="p-6 animate-fadeIn">
            {/* Encabezado */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold mb-2 text-accent">Funciones Principales</h1>
                <p className="text-gray-700">
                    Descubre todas las funcionalidades que InDrive tiene para ti
                </p>
            </div>

            {/* Grid de funciones */}
            <div className="grid lg:grid-cols-2 gap-6">
                {funciones.map((funcion, idx) => (
                    <div
                        key={funcion.id}
                        className="bg-secondary/10 rounded-xl border border-secondary/20 overflow-hidden hover:shadow-lg transition-all animate-slideIn"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                        {/* Header con gradiente */}
                        <div className={`bg-gradient-to-r ${funcion.color} p-6 text-white`}>
                            <div className="flex items-center gap-4 mb-3">
                                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                                    {funcion.icono}
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold">{funcion.titulo}</h2>
                                    <p className="text-white/90 text-sm mt-1">{funcion.descripcion}</p>
                                </div>
                            </div>
                        </div>

                        {/* Contenido */}
                        <div className="p-6 space-y-5">
                            {/* Imagen representativa */}
                            <div className="rounded-lg overflow-hidden border-2 border-secondary/30">
                                <img
                                    src={funcion.imagen}
                                    alt={funcion.titulo}
                                    className="w-full h-auto"
                                />
                            </div>

                            {/* Características */}
                            <div>
                                <h3 className="font-semibold text-accent mb-3 flex items-center gap-2">
                                    <ArrowRight className="w-5 h-5 text-secondary" />
                                    ¿Cómo funciona?
                                </h3>
                                <ul className="space-y-2">
                                    {funcion.caracteristicas.map((caracteristica, caridx) => (
                                        <li key={caridx} className="flex items-start gap-2 text-sm text-gray-700">
                                            <span className="text-secondary mt-1">•</span>
                                            <span>{caracteristica}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Beneficios */}
                            <div className="pt-4 border-t border-secondary/20">
                                <h3 className="font-semibold text-accent mb-3 text-sm">Beneficios principales:</h3>
                                <div className="space-y-2">
                                    {funcion.beneficios.map((beneficio, benidx) => (
                                        <div key={benidx} className="flex items-center gap-2 text-sm">
                                            <span className="text-green-600">{beneficio.icono}</span>
                                            <span className="text-gray-700">{beneficio.texto}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Banner informativo */}
            <div className="mt-8 p-5 bg-secondary/15 border-l-4 border-secondary rounded-lg">
                <h3 className="font-semibold text-accent text-lg mb-2">¿Necesitas más información?</h3>
                <p className="text-gray-700">
                    Todas estas funciones están diseñadas para brindarte la mejor experiencia. Si tienes dudas sobre cómo usar alguna,
                    consulta las secciones de Guía del Usuario o contacta a nuestro equipo de Soporte.
                </p>
            </div>
        </div>
    );
}