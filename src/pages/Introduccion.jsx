export default function IntroduccionPage() {
    return (
        <div className="animate-fadeIn p-8">

            {/* Título */}
            <h1 className="text-3xl font-bold text-accent mb-4">
                Introducción
            </h1>

            {/* Subtítulo */}
            <p className="text-lg text-accent/80 leading-relaxed mb-6">
                Bienvenido al <strong className="text-secondary font-semibold">Manual de Usuario de InDrive</strong>.
                Aquí encontrarás información clara y práctica para entender cómo funciona la aplicación,
                cómo navegar por sus funciones principales y cómo aprovechar al máximo cada herramienta.
            </p>

            {/* Tarjeta principal */}
            <div className="bg-white border-2 border-secondary/30 rounded-xl p-6 shadow-md mb-6 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-1 h-6 bg-secondary rounded-full"></div>
                    <h2 className="text-xl font-semibold text-accent">
                        ¿Qué es InDrive?
                    </h2>
                </div>

                <p className="text-accent/70 leading-relaxed mb-4">
                    InDrive es una plataforma de movilidad que permite a los usuarios elegir, negociar
                    y confirmar precios en tiempo real con conductores. A diferencia de otras aplicaciones,
                    InDrive ofrece un modelo transparente y flexible, adaptado a las necesidades de cada persona.
                </p>

                <ul className="space-y-2 text-accent/70 leading-relaxed">
                    <li className="flex items-start gap-2">
                        <span className="text-secondary font-bold mt-1">•</span>
                        <span>Solicita viajes de forma rápida y segura.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-secondary font-bold mt-1">•</span>
                        <span>Negocia el precio directamente con el conductor.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-secondary font-bold mt-1">•</span>
                        <span>Revisa calificaciones y comentarios antes de confirmar.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-secondary font-bold mt-1">•</span>
                        <span>Accede a funciones adicionales como soporte, historial y opciones de seguridad.</span>
                    </li>
                </ul>
            </div>

            {/* Sección de objetivos */}
            <div className="bg-secondary/10 border-2 border-secondary/40 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-white font-bold text-sm">
                        📖
                    </div>
                    <h2 className="text-xl font-semibold text-accent">
                        Objetivo de este manual
                    </h2>
                </div>

                <p className="text-accent/70 leading-relaxed">
                    Este manual está diseñado para ayudarte a comprender cada aspecto de la aplicación:
                    desde la instalación inicial hasta el uso avanzado de funciones y soluciones a problemas comunes.
                    Nuestro objetivo es que puedas sentirte <strong className="text-secondary">seguro y confiado</strong> al utilizar todas las herramientas
                    que InDrive pone a tu disposición.
                </p>
            </div>

        </div>
    );
}