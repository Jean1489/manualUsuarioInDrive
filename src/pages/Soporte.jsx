import { useState } from 'react';
import { Mail, Phone, MessageCircle, Globe, Clock, AlertCircle, CheckCircle, HelpCircle, Send } from 'lucide-react';

export default function SoportePage() {
    const [formularioEnviado, setFormularioEnviado] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        tipo: '',
        mensaje: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormularioEnviado(true);
        setTimeout(() => setFormularioEnviado(false), 5000);
        setFormData({ nombre: '', email: '', tipo: '', mensaje: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const canalesContacto = [
        {
            titulo: "Email",
            descripcion: "Respuesta en 24-48 horas",
            contacto: "support@indrive.com",
            link: "mailto:support@indrive.com",
            icono: <Mail className="w-6 h-6" />,
            horario: "Disponible 24/7",
            tipo: "Consultas generales"
        },
        {
            titulo: "Centro de Ayuda",
            descripcion: "Artículos y guías completas",
            contacto: "help.indrive.com",
            link: "https://indrive.com/es-co/contacts/support",
            icono: <Globe className="w-6 h-6" />,
            horario: "Acceso inmediato",
            tipo: "Autoservicio"
        },
        {
            titulo: "Chat en la App",
            descripcion: "Soporte en tiempo real",
            contacto: "Configuración → Soporte",
            icono: <MessageCircle className="w-6 h-6" />,
            horario: "Lun-Dom: 6am-10pm",
            tipo: "Asistencia inmediata"
        },
        {
            titulo: "Teléfono",
            descripcion: "Atención personalizada",
            contacto: "+57 1 234 5678",
            link: "tel:+5712345678",
            icono: <Phone className="w-6 h-6" />,
            horario: "Lun-Vie: 8am-6pm",
            tipo: "Urgencias"
        }
    ];

    const preguntasFrecuentes = [
        {
            pregunta: "¿Cuánto tiempo tarda en responder el soporte?",
            respuesta: "Email: 24-48h | Chat en app: Inmediato | Teléfono: En el momento"
        },
        {
            pregunta: "¿Qué información debo proporcionar?",
            respuesta: "Incluye tu número de usuario, descripción del problema, capturas de pantalla si aplica, y fecha/hora del incidente"
        },
        {
            pregunta: "¿El soporte está disponible en español?",
            respuesta: "Sí, todo nuestro equipo de soporte habla español y está disponible para ayudarte"
        },
        {
            pregunta: "¿Cómo hago seguimiento a mi caso?",
            respuesta: "Recibirás un número de ticket por email. Úsalo para consultar el estado en el Centro de Ayuda"
        }
    ];

    const tiposConsulta = [
        "Problema con la app",
        "Problema de pago",
        "Cuenta y perfil",
        "Seguridad",
        "Viaje específico",
        "Sugerencia o feedback",
        "Otro"
    ];

    return (
        <div className="p-6 animate-fadeIn">
            {/* Encabezado */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold mb-2 text-accent">Soporte y Ayuda</h1>
                <p className="text-gray-700">
                    Estamos aquí para ayudarte. Elige el canal de contacto que mejor se ajuste a tu necesidad
                </p>
            </div>

            {/* Banner de emergencia */}
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                    <p className="font-semibold text-red-800">Emergencia o situación de riesgo</p>
                    <p className="text-sm text-red-700">
                        Si estás en peligro, contacta inmediatamente al 123 o usa el botón de emergencia en la app
                    </p>
                </div>
            </div>

            {/* Canales de contacto */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-accent mb-4">Canales de Contacto</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {canalesContacto.map((canal, idx) => (
                        <div
                            key={idx}
                            className="bg-secondary/10 p-5 rounded-lg border border-secondary/20 hover:bg-secondary/15 transition-all animate-slideIn"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-secondary text-primary rounded-lg flex-shrink-0">
                                    {canal.icono}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-lg text-accent mb-1">{canal.titulo}</h3>
                                    <p className="text-sm text-gray-600 mb-2">{canal.descripcion}</p>
                                    {canal.link ? (
                                        <a
                                            href={canal.link}
                                            target={canal.link.startsWith('http') ? '_blank' : undefined}
                                            rel={canal.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            className="text-accent hover:text-highlight-dark font-medium underline block mb-2"
                                        >
                                            {canal.contacto}
                                        </a>
                                    ) : (
                                        <p className="text-accent font-medium mb-2">{canal.contacto}</p>
                                    )}
                                    <div className="flex items-center gap-4 text-sm text-gray-600">
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {canal.horario}
                                        </span>
                                        <span className="px-2 py-1 bg-secondary/20 rounded text-xs font-medium">
                                            {canal.tipo}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Formulario de contacto */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-accent mb-4">Enviar Consulta</h2>
                <div className="bg-secondary/10 p-6 rounded-lg border border-secondary/20">
                    {formularioEnviado ? (
                        <div className="text-center py-8 animate-fadeIn">
                            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-accent mb-2">¡Mensaje enviado!</h3>
                            <p className="text-gray-700">Nos pondremos en contacto contigo pronto</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-accent mb-2">
                                        Nombre completo
                                    </label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 bg-white border-2 border-secondary/30 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                                        placeholder="Tu nombre"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-accent mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 bg-white border-2 border-secondary/30 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                                        placeholder="tu@email.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-accent mb-2">
                                    Tipo de consulta
                                </label>
                                <select
                                    name="tipo"
                                    value={formData.tipo}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 bg-white border-2 border-secondary/30 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                                >
                                    <option value="">Selecciona una opción</option>
                                    {tiposConsulta.map((tipo, idx) => (
                                        <option key={idx} value={tipo}>{tipo}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-accent mb-2">
                                    Mensaje
                                </label>
                                <textarea
                                    name="mensaje"
                                    value={formData.mensaje}
                                    onChange={handleChange}
                                    rows="5"
                                    className="w-full px-4 py-2.5 bg-white border-2 border-secondary/30 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all resize-none"
                                    placeholder="Describe tu problema o consulta en detalle..."
                                />
                            </div>
                            <button
                                onClick={handleSubmit}
                                className="w-full md:w-auto px-6 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-highlight-dark transition-colors shadow-md flex items-center justify-center gap-2"
                            >
                                <Send className="w-5 h-5" />
                                Enviar mensaje
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Preguntas frecuentes */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-accent mb-4">Preguntas Frecuentes</h2>
                <div className="space-y-3">
                    {preguntasFrecuentes.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-secondary/10 p-4 rounded-lg border border-secondary/20"
                        >
                            <div className="flex items-start gap-3">
                                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-semibold text-accent mb-1">{item.pregunta}</p>
                                    <p className="text-gray-700 text-sm">{item.respuesta}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                <p className="text-sm text-gray-600 text-center">
                    <span className="font-semibold text-accent">Tiempo de respuesta promedio:</span> Email 24-48h | Chat en app: Inmediato
                </p>
            </div>
        </div>
    );
}