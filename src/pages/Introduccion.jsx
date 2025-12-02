export default function IntroduccionPage() {
    return (
        <div className="animate-fadeIn">

            {/* Título */}
            <h1 className="text-3xl font-bold text-neutral-900 mb-4">
                Introducción
            </h1>

            {/* Subtítulo */}
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Bienvenido al <strong className="text-indrive">Manual de Usuario de InDrive</strong>.
                Aquí encontrarás información clara y práctica para entender cómo funciona la aplicación,
                cómo navegar por sus funciones principales y cómo aprovechar al máximo cada herramienta.
            </p>

            {/* Tarjeta principal */}
            <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm mb-6">
                <h2 className="text-xl font-semibold text-neutral-900 mb-3">
                    ¿Qué es InDrive?
                </h2>

                <p className="text-neutral-700 leading-relaxed mb-4">
                    InDrive es una plataforma de movilidad que permite a los usuarios elegir, negociar
                    y confirmar precios en tiempo real con conductores. A diferencia de otras aplicaciones,
                    InDrive ofrece un modelo transparente y flexible, adaptado a las necesidades de cada persona.
                </p>

                <ul className="list-disc ml-6 text-neutral-700 leading-relaxed">
                    <li>Solicita viajes de forma rápida y segura.</li>
                    <li>Negocia el precio directamente con el conductor.</li>
                    <li>Revisa calificaciones y comentarios antes de confirmar.</li>
                    <li>Accede a funciones adicionales como soporte, historial y opciones de seguridad.</li>
                </ul>
            </div>

            {/* Sección de objetivos */}
            <div className="bg-indrive/10 border border-indrive rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-neutral-900 mb-3">
                    Objetivo de este manual
                </h2>

                <p className="text-neutral-700 leading-relaxed">
                    Este manual está diseñado para ayudarte a comprender cada aspecto de la aplicación:
                    desde la instalación inicial hasta el uso avanzado de funciones y soluciones a problemas comunes.
                    Nuestro objetivo es que puedas sentirte seguro y confiado al utilizar todas las herramientas
                    que InDrive pone a tu disposición.
                </p>
            </div>

        </div>
    );
}
