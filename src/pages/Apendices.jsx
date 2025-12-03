import { useState } from 'react';
import { Phone, Mail, ExternalLink, FileText, Clock, ChevronDown, ChevronUp, Download } from 'lucide-react';

export default function ApendicesPage() {
    const [apendiceAbierto, setApendiceAbierto] = useState(null);

    const toggleApendice = (idx) => {
        setApendiceAbierto(apendiceAbierto === idx ? null : idx);
    };

    const apendices = [
        {
            titulo: "Apéndice A: Contactos Importantes",
            icono: <Phone className="w-5 h-5" />,
            secciones: [
                {
                    subtitulo: "Soporte Técnico",
                    items: [
                        { tipo: "Teléfono", valor: "+57 1 234 5678", icono: <Phone className="w-4 h-4" /> },
                        { tipo: "Email", valor: "soporte@indrive.com.co", icono: <Mail className="w-4 h-4" /> },
                        { tipo: "Horario", valor: "Lunes a Domingo, 24/7", icono: <Clock className="w-4 h-4" /> }
                    ]
                },
                {
                    subtitulo: "Atención al Cliente",
                    items: [
                        { tipo: "WhatsApp", valor: "+57 300 123 4567", icono: <Phone className="w-4 h-4" /> },
                        { tipo: "Email", valor: "atencion@indrive.com.co", icono: <Mail className="w-4 h-4" /> },
                        { tipo: "Chat en línea", valor: "Disponible en la app", icono: <ExternalLink className="w-4 h-4" /> }
                    ]
                },
                {
                    subtitulo: "Emergencias y Seguridad",
                    items: [
                        { tipo: "Línea de emergencia", valor: "123 (Desde la app)", icono: <Phone className="w-4 h-4" /> },
                        { tipo: "Email urgente", valor: "seguridad@indrive.com.co", icono: <Mail className="w-4 h-4" /> },
                        { tipo: "Reporte de incidentes", valor: "Disponible 24/7", icono: <Clock className="w-4 h-4" /> }
                    ]
                }
            ]
        },
        {
            titulo: "Apéndice B: Recursos Adicionales",
            icono: <FileText className="w-5 h-5" />,
            secciones: [
                {
                    subtitulo: "Documentación Oficial",
                    items: [
                        { tipo: "Centro de ayuda", valor: "help.indrive.com", link: "https://help.indrive.com", icono: <ExternalLink className="w-4 h-4" /> },
                        { tipo: "Guía del conductor", valor: "Descarga PDF", descargable: true, icono: <Download className="w-4 h-4" /> },
                        { tipo: "Términos y condiciones", valor: "indrive.com/terms", link: "https://indrive.com/terms", icono: <ExternalLink className="w-4 h-4" /> }
                    ]
                },
                {
                    subtitulo: "Tutoriales en Video",
                    items: [
                        { tipo: "YouTube oficial", valor: "@InDriveOfficial", link: "https://youtube.com/@indrive", icono: <ExternalLink className="w-4 h-4" /> },
                        { tipo: "Cómo empezar", valor: "Tutorial básico", link: "#", icono: <ExternalLink className="w-4 h-4" /> },
                        { tipo: "Tips de seguridad", valor: "Video guía", link: "#", icono: <ExternalLink className="w-4 h-4" /> }
                    ]
                },
                {
                    subtitulo: "Comunidad",
                    items: [
                        { tipo: "Facebook", valor: "InDrive Colombia", link: "https://facebook.com/indrive", icono: <ExternalLink className="w-4 h-4" /> },
                        { tipo: "Instagram", valor: "@indrive_col", link: "https://instagram.com/indrive", icono: <ExternalLink className="w-4 h-4" /> },
                        { tipo: "Foro de conductores", valor: "community.indrive.com", link: "#", icono: <ExternalLink className="w-4 h-4" /> }
                    ]
                }
            ]
        },
        {
            titulo: "Apéndice C: Historial de Actualizaciones",
            icono: <Clock className="w-5 h-5" />,
            secciones: [
                {
                    subtitulo: "Versión 4.8.2 (Diciembre 2024)",
                    items: [
                        { tipo: "Nueva función", valor: "Modo nocturno mejorado" },
                        { tipo: "Mejora", valor: "Optimización de batería" },
                        { tipo: "Corrección", valor: "Problema con notificaciones resuelto" }
                    ]
                },
                {
                    subtitulo: "Versión 4.8.1 (Noviembre 2024)",
                    items: [
                        { tipo: "Nueva función", valor: "Viajes programados con más opciones" },
                        { tipo: "Mejora", valor: "Interfaz de negociación rediseñada" },
                        { tipo: "Corrección", valor: "Estabilidad general mejorada" }
                    ]
                },
                {
                    subtitulo: "Versión 4.8.0 (Octubre 2024)",
                    items: [
                        { tipo: "Nueva función", valor: "Sistema de propinas integrado" },
                        { tipo: "Nueva función", valor: "Compartir ubicación en tiempo real" },
                        { tipo: "Mejora", valor: "Velocidad de carga optimizada" }
                    ]
                }
            ]
        }
    ];

    return (
        <div className="p-6 animate-fadeIn">
            {/* Encabezado */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold mb-2 text-accent">Apéndices</h1>
                <p className="text-gray-700">
                    Información adicional y recursos complementarios para mejorar tu experiencia con InDrive
                </p>
            </div>

            {/* Lista de apéndices */}
            <div className="space-y-4">
                {apendices.map((apendice, idx) => (
                    <div
                        key={idx}
                        className="bg-secondary/10 rounded-lg shadow-sm border border-secondary/20 overflow-hidden transition-all animate-slideIn"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                        {/* Header del apéndice */}
                        <button
                            onClick={() => toggleApendice(idx)}
                            className="w-full p-5 flex items-center justify-between hover:bg-secondary/15 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-secondary text-primary rounded-lg">
                                    {apendice.icono}
                                </div>
                                <h3 className="font-bold text-lg text-accent text-left">{apendice.titulo}</h3>
                            </div>
                            {apendiceAbierto === idx ? (
                                <ChevronUp className="w-5 h-5 text-accent" />
                            ) : (
                                <ChevronDown className="w-5 h-5 text-accent" />
                            )}
                        </button>

                        {/* Contenido expandible */}
                        {apendiceAbierto === idx && (
                            <div className="p-5 pt-0 space-y-6 animate-fadeIn">
                                {apendice.secciones.map((seccion, secIdx) => (
                                    <div key={secIdx} className="border-t border-secondary/20 pt-4">
                                        <h4 className="font-semibold text-accent mb-3">{seccion.subtitulo}</h4>
                                        <div className="space-y-2">
                                            {seccion.items.map((item, itemIdx) => (
                                                <div
                                                    key={itemIdx}
                                                    className="flex items-start gap-3 p-3 bg-white rounded-lg hover:bg-primary/50 transition-colors"
                                                >
                                                    {item.icono && (
                                                        <div className="text-secondary mt-0.5">
                                                            {item.icono}
                                                        </div>
                                                    )}
                                                    <div className="flex-1">
                                                        <p className="text-sm font-medium text-gray-600">{item.tipo}</p>
                                                        {item.link ? (
                                                            <a
                                                                href={item.link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-accent hover:text-highlight-dark font-medium underline"
                                                            >
                                                                {item.valor}
                                                            </a>
                                                        ) : item.descargable ? (
                                                            <button className="text-accent hover:text-highlight-dark font-medium underline">
                                                                {item.valor}
                                                            </button>
                                                        ) : (
                                                            <p className="text-gray-800 font-medium">{item.valor}</p>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Footer informativo */}
            <div className="mt-8 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                <p className="text-sm text-gray-600 text-center">
                    <span className="font-semibold text-accent">Nota:</span> Esta información se actualiza periódicamente.
                    Para cambios recientes, visita nuestro sitio web oficial.
                </p>
            </div>
        </div>
    );
}