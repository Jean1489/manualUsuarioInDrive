export default function InterfazPage() {
    return (
        <div className="p-8 animate-fadeIn">

            {/* Título principal */}
            <h1 className="text-3xl font-bold text-highlight mb-4">
                Interfaz de Usuario
            </h1>

            <p className="text-accent/80 mb-8 leading-relaxed">
                La interfaz de InDrive está diseñada para ser clara, rápida y fácil de usar
                mientras conduces. A continuación encontrarás una descripción detallada de cada
                sección de la pantalla principal y sus funciones.
            </p>

            {/* Sección 1 - Pantalla Principal */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                    Pantalla Principal
                </h2>

                <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm">

                    <p className="text-accent/90 mb-6">
                        Esta es la vista general que verás al iniciar sesión. Desde aquí puedes
                        activar tu disponibilidad y comenzar a recibir solicitudes de viaje.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                        {/* Descripción */}
                        <ul className="space-y-4 text-accent/90">
                            <li>
                                <span className="font-semibold text-highlight">• Mapa:</span>{" "}
                                Muestra tu ubicación actual y las zonas activas de demanda.
                            </li>
                            <li>
                                <span className="font-semibold text-highlight">• Estado del conductor:</span>{" "}
                                Puedes cambiar entre Disponible, Ocupado o Fuera de línea.
                            </li>
                            <li>
                                <span className="font-semibold text-highlight">• Botón de navegación:</span>{" "}
                                Accede a Google Maps o Waze directamente.
                            </li>
                            <li>
                                <span className="font-semibold text-highlight">• Panel inferior:</span>{" "}
                                Muestra tus ganancias actuales, promociones y alertas.
                            </li>
                        </ul>

                        {/* Espacio para screenshot */}
                        <div className="aspect-[9/16] bg-neutral-100 rounded-xl border border-neutral-300 flex items-center justify-center text-neutral-500">
                            Pantalla Principal
                        </div>

                    </div>
                </div>
            </section>

            {/* Sección 2 - Menú y Panel Lateral */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                    Menú y Panel Lateral
                </h2>

                <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm">
                    <p className="text-accent/90 mb-6">
                        El menú lateral te permite acceder rápidamente a configuraciones,
                        historial, documentos y tu perfil de conductor.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                        <ul className="space-y-4 text-accent/90">
                            <li>
                                <span className="font-semibold text-highlight">• Perfil del conductor:</span>{" "}
                                Información personal y estado de verificación.
                            </li>
                            <li>
                                <span className="font-semibold text-highlight">• Documentos:</span>{" "}
                                Carga y visualiza tu licencia, póliza y documentos del vehículo.
                            </li>
                            <li>
                                <span className="font-semibold text-highlight">• Historial de viajes:</span>{" "}
                                Detalles completos de viajes pasados.
                            </li>
                            <li>
                                <span className="font-semibold text-highlight">• Soporte:</span>{" "}
                                Acceso directo al centro de ayuda.
                            </li>
                        </ul>

                        <div className="aspect-[9/16] bg-neutral-100 rounded-xl border border-neutral-300 flex items-center justify-center text-neutral-500">
                            Menú lateral
                        </div>

                    </div>
                </div>
            </section>

            {/* Sección 3 - Solicitud de Viaje */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                    Solicitud de Viaje
                </h2>

                <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm">

                    <p className="text-accent/90 mb-6">
                        Cuando un pasajero solicita un viaje, aparecerá una tarjeta flotante con
                        toda la información necesaria para aceptar o declinar.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                        <ul className="space-y-4 text-accent/90">
                            <li>
                                <span className="font-semibold text-highlight">• Distancia al pasajero:</span>{" "}
                                Cuántos minutos o kilómetros te separan del punto de recogida.
                            </li>
                            <li>
                                <span className="font-semibold text-highlight">• Monto ofertado:</span>{" "}
                                El pasajero propone un valor. Puedes negociar más tarde.
                            </li>
                            <li>
                                <span className="font-semibold text-highlight">• Método de pago:</span>{" "}
                                Efectivo o tarjeta.
                            </li>
                            <li>
                                <span className="font-semibold text-highlight">• Botón Aceptar:</span>{" "}
                                Inicia el viaje y navega hacia el pasajero.
                            </li>
                        </ul>

                        <div className="aspect-[9/16] bg-neutral-100 rounded-xl border border-neutral-300 flex items-center justify-center text-neutral-500">
                            Solicitud de Viaje
                        </div>

                    </div>

                </div>
            </section>

            {/* Sección 4 - Barra Inferior */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                    Barra Inferior
                </h2>

                <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm">
                    <p className="text-accent/90 mb-6">
                        La barra inferior muestra información en tiempo real sobre tus ganancias,
                        estado de cuenta y mensajes importantes del sistema.
                    </p>

                    <div className="aspect-[9/16] bg-neutral-100 rounded-xl border border-neutral-300 flex items-center justify-center text-neutral-500">
                        Barra Inferior
                    </div>
                </div>
            </section>

            {/* Tips */}
            <section className="mt-12">
                <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-xl">
                    <h3 className="font-semibold text-secondary text-xl mb-2">Consejo:</h3>
                    <p className="text-accent/90 leading-relaxed">
                        Mantén tu app actualizada para asegurarte de ver siempre la última versión
                        de la interfaz y nuevas funciones disponibles para conductores.
                    </p>
                </div>
            </section>

        </div>
    );
}
