import { useState } from 'react';
import { RefreshCw, Smartphone, Bell, MapPin, Trash2, CheckCircle, AlertTriangle, Settings, Download, Shield, Wifi, Battery } from 'lucide-react';

export default function MantenimientoPage() {
    const [tareaCompletada, setTareaCompletada] = useState({});

    const toggleTarea = (id) => {
        setTareaCompletada(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const tareasMantenimiento = [
        {
            id: 1,
            titulo: "Actualizar la aplicación",
            descripcion: "Mantén InDrive actualizado para obtener las últimas funciones y correcciones de seguridad",
            icono: <Download className="w-6 h-6" />,
            frecuencia: "Cuando esté disponible",
            prioridad: "Alta",
            pasos: [
                "Abre Play Store (Android) o App Store (iOS)",
                "Busca 'InDrive' o ve a la sección 'Mis apps'",
                "Si hay actualización disponible, toca 'Actualizar'",
                "Espera a que se complete la descarga e instalación"
            ]
        },
        {
            id: 2,
            titulo: "Verificar permisos de ubicación",
            descripcion: "Asegúrate de que la app tenga acceso a tu ubicación para funcionar correctamente",
            icono: <MapPin className="w-6 h-6" />,
            frecuencia: "Mensual",
            prioridad: "Alta",
            pasos: [
                "Ve a Configuración del dispositivo → Apps → InDrive",
                "Selecciona 'Permisos' o 'Permissions'",
                "Activa 'Ubicación' y selecciona 'Permitir siempre' o 'Mientras se usa'",
                "Verifica que el GPS esté activado en tu dispositivo"
            ]
        },
        {
            id: 3,
            titulo: "Gestionar notificaciones",
            descripcion: "Configura las notificaciones para recibir alertas importantes de viajes y promociones",
            icono: <Bell className="w-6 h-6" />,
            frecuencia: "Según necesidad",
            prioridad: "Media",
            pasos: [
                "Abre InDrive → Configuración → Notificaciones",
                "Activa las notificaciones importantes: viajes, mensajes, ofertas",
                "Desactiva las que no necesites para reducir distracciones",
                "Verifica en Configuración del dispositivo que las notificaciones estén permitidas"
            ]
        },
        {
            id: 4,
            titulo: "Limpiar caché de la app",
            descripcion: "Elimina archivos temporales si experimentas errores o lentitud",
            icono: <Trash2 className="w-6 h-6" />,
            frecuencia: "Trimestral o cuando hay problemas",
            prioridad: "Media",
            pasos: [
                "Ve a Configuración del dispositivo → Apps → InDrive",
                "Selecciona 'Almacenamiento' o 'Storage'",
                "Toca 'Limpiar caché' (NO toques 'Borrar datos' a menos que sea necesario)",
                "Reinicia la app para verificar mejoras"
            ]
        },
        {
            id: 5,
            titulo: "Revisar conexión a internet",
            descripcion: "Verifica que tengas una conexión estable para usar la app sin interrupciones",
            icono: <Wifi className="w-6 h-6" />,
            frecuencia: "Antes de cada viaje",
            prioridad: "Alta",
            pasos: [
                "Verifica que WiFi o datos móviles estén activados",
                "Comprueba la intensidad de la señal",
                "Si hay problemas, reinicia el router o cambia entre WiFi y datos móviles",
                "Considera descargar mapas sin conexión si viajas a zonas con mala señal"
            ]
        },
        {
            id: 6,
            titulo: "Optimizar batería",
            descripcion: "Configura el uso de batería para que la app funcione correctamente en segundo plano",
            icono: <Battery className="w-6 h-6" />,
            frecuencia: "Después de actualizar el SO",
            prioridad: "Media",
            pasos: [
                "Ve a Configuración → Batería → Optimización de batería",
                "Busca InDrive en la lista",
                "Selecciona 'No optimizar' para permitir funcionamiento en segundo plano",
                "Activa el modo ahorro de batería inteligente si está disponible"
            ]
        },
        {
            id: 7,
            titulo: "Verificar seguridad de la cuenta",
            descripcion: "Revisa la configuración de seguridad y privacidad de tu cuenta",
            icono: <Shield className="w-6 h-6" />,
            frecuencia: "Mensual",
            prioridad: "Alta",
            pasos: [
                "Abre InDrive → Perfil → Seguridad",
                "Verifica tu número de teléfono y email",
                "Activa la verificación en dos pasos si está disponible",
                "Revisa los dispositivos con sesión activa y cierra sesiones sospechosas"
            ]
        },
        {
            id: 8,
            titulo: "Revisar historial de viajes",
            descripcion: "Mantén un registro organizado de tus viajes para referencia futura",
            icono: <Settings className="w-6 h-6" />,
            frecuencia: "Mensual",
            prioridad: "Baja",
            pasos: [
                "Ve a InDrive → Historial de viajes",
                "Revisa viajes recientes y reporta cualquier anomalía",
                "Descarga recibos si los necesitas para gastos",
                "Elimina viajes antiguos si deseas mantener privacidad"
            ]
        }
    ];

    const consejosBuenasPracticas = [
        {
            titulo: "Mantén tu app actualizada",
            descripcion: "Las actualizaciones incluyen mejoras de seguridad y nuevas funciones"
        },
        {
            titulo: "Monitorea el espacio de almacenamiento",
            descripcion: "La app necesita espacio suficiente para funcionar correctamente (mínimo 500MB libres)"
        },
        {
            titulo: "Reinicia la app periódicamente",
            descripcion: "Cerrar y abrir la app cada cierto tiempo puede prevenir errores menores"
        },
        {
            titulo: "Usa una conexión segura",
            descripcion: "Evita realizar transacciones en redes WiFi públicas sin protección"
        }
    ];

    const prioridadColor = (prioridad) => {
        switch (prioridad) {
            case 'Alta': return 'bg-red-100 text-red-700 border-red-300';
            case 'Media': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
            case 'Baja': return 'bg-green-100 text-green-700 border-green-300';
            default: return 'bg-gray-100 text-gray-700 border-gray-300';
        }
    };

    return (
        <div className="p-6 animate-fadeIn">
            {/* Encabezado */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold mb-2 text-accent">Mantenimiento y Optimización</h1>
                <p className="text-gray-700">
                    Mantén InDrive funcionando de manera óptima con estas tareas de mantenimiento recomendadas
                </p>
            </div>

            {/* Banner informativo */}
            <div className="mb-6 p-4 bg-secondary/15 border-l-4 border-secondary rounded-lg flex items-start gap-3">
                <RefreshCw className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                    <p className="font-semibold text-accent">Mantenimiento preventivo</p>
                    <p className="text-sm text-gray-700">
                        Realizar estas tareas regularmente ayuda a prevenir problemas y asegura la mejor experiencia
                    </p>
                </div>
            </div>

            {/* Tareas de mantenimiento */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-accent mb-4">Tareas de Mantenimiento</h2>
                <div className="space-y-4">
                    {tareasMantenimiento.map((tarea, idx) => (
                        <div
                            key={tarea.id}
                            className="bg-secondary/10 rounded-lg border border-secondary/20 overflow-hidden animate-slideIn"
                            style={{ animationDelay: `${idx * 0.05}s` }}
                        >
                            {/* Header de la tarea */}
                            <div className="p-5">
                                <div className="flex items-start gap-4 mb-3">
                                    <div className="p-3 bg-secondary text-primary rounded-lg flex-shrink-0">
                                        {tarea.icono}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between gap-3 mb-2">
                                            <h3 className="font-bold text-lg text-accent">{tarea.titulo}</h3>
                                            <button
                                                onClick={() => toggleTarea(tarea.id)}
                                                className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold transition-all ${tareaCompletada[tarea.id]
                                                        ? 'bg-green-100 text-green-700'
                                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                    }`}
                                            >
                                                <CheckCircle className="w-3 h-3" />
                                                {tareaCompletada[tarea.id] ? 'Completada' : 'Marcar'}
                                            </button>
                                        </div>
                                        <p className="text-gray-700 text-sm mb-3">{tarea.descripcion}</p>
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${prioridadColor(tarea.prioridad)}`}>
                                                {tarea.prioridad} prioridad
                                            </span>
                                            <span className="px-3 py-1 bg-secondary/20 text-accent rounded-full text-xs font-medium">
                                                {tarea.frecuencia}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Pasos detallados */}
                                <div className="mt-4 p-4 bg-white rounded-lg border border-secondary/20">
                                    <p className="font-semibold text-accent mb-2 text-sm">Pasos a seguir:</p>
                                    <ol className="space-y-2">
                                        {tarea.pasos.map((paso, pasoIdx) => (
                                            <li key={pasoIdx} className="flex items-start gap-2 text-sm text-gray-700">
                                                <span className="font-bold text-secondary flex-shrink-0 mt-0.5">{pasoIdx + 1}.</span>
                                                <span>{paso}</span>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Consejos y buenas prácticas */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-accent mb-4">Consejos y Buenas Prácticas</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {consejosBuenasPracticas.map((consejo, idx) => (
                        <div
                            key={idx}
                            className="bg-secondary/10 p-4 rounded-lg border border-secondary/20 flex items-start gap-3"
                        >
                            <Smartphone className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="font-semibold text-accent mb-1">{consejo.titulo}</p>
                                <p className="text-sm text-gray-700">{consejo.descripcion}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Banner de advertencia */}
            <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                    <p className="font-semibold text-yellow-800">Importante</p>
                    <p className="text-sm text-yellow-700">
                        Antes de borrar datos de la app, asegúrate de recordar tu contraseña. Limpiar la caché es seguro,
                        pero borrar datos eliminará tu sesión y deberás iniciar sesión nuevamente.
                    </p>
                </div>
            </div>
        </div>
    );
}