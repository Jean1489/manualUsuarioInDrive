export default function InstalacionPage() {
    return (
        <div className="p-8 animate-fadeIn">

            {/* Título principal */}
            <h1 className="text-3xl font-bold text-highlight mb-4">
                Instalación de la Aplicación InDrive
            </h1>

            <p className="text-accent/80 mb-8 leading-relaxed">
                Sigue esta guía paso a paso para instalar la aplicación InDrive en tu dispositivo
                Android o iOS. Asegúrate de haber revisado los requisitos técnicos antes de continuar.
            </p>

            {/* Sección Android */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center gap-2">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg"
                        alt="Android"
                        className="w-8 h-8"
                    />
                    Instalación en Android
                </h2>

                <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm">

                    <ol className="list-decimal ml-5 space-y-3 text-accent/90">
                        <li>Abre la aplicación <strong>Google Play Store</strong> en tu dispositivo Android.</li>
                        <li>En la barra de búsqueda, escribe <strong>“InDrive Driver”</strong>.</li>
                        <li>Selecciona la aplicación oficial identificada con el logo de InDrive.</li>
                        <li>Presiona <strong>Instalar</strong> y espera a que finalice la descarga.</li>
                        <li>Una vez instalada, toca <strong>Abrir</strong> para iniciar la aplicación.</li>
                    </ol>

                    {/* Botón descarga */}
                    <a
                        href="https://play.google.com/store/apps/details?id=sinet.startup.inDriver&pid=any_source&is_retargeting=true&af_js_web=true&af_adset=any_content&af_ad=any_term&deep_link_value=indriver%3A%2F%2Fopen%2Fclient%2Fappcity&af_channel=any_medium&af_siteid=web2app&af_sub_siteid=https://indrive.com&af_ss_ui=true&c=any_campaign&af_ss_ver=2_9_5"
                        target="_blank"
                        className="block mt-6 w-fit"
                    >
                        <img
                            src="/images/google-play-badge.png"
                            alt="Descargar en Google Play"
                            className="h-12 hover:scale-105 transition-transform"
                        />
                    </a>

                    {/* Espacio para capturas */}
                    <div className="mt-8">
                        <p className="font-semibold text-secondary mb-2">Capturas de ejemplo:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="aspect-[9/16] bg-neutral-100 rounded-xl border border-neutral-300 flex items-center justify-center text-neutral-500">
                                Imagen 1
                            </div>
                            <div className="aspect-[9/16] bg-neutral-100 rounded-xl border border-neutral-300 flex items-center justify-center text-neutral-500">
                                Imagen 2
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Sección iOS */}
            <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4 flex items-center gap-2">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                        alt="Apple iOS"
                        className="w-8 h-8"
                    />
                    Instalación en iPhone (iOS)
                </h2>

                <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm">

                    <ol className="list-decimal ml-5 space-y-3 text-accent/90">
                        <li>Abre la aplicación <strong>App Store</strong> en tu iPhone.</li>
                        <li>Presiona en la barra de búsqueda y escribe <strong>“InDrive Driver”</strong>.</li>
                        <li>Selecciona la aplicación oficial.</li>
                        <li>Toca el botón <strong>Obtener</strong> y autentica con Face ID o contraseña.</li>
                        <li>Cuando termine, presiona <strong>Abrir</strong> para iniciar la app.</li>
                    </ol>

                    {/* Botón descarga */}
                    <a
                        href="https://apps.apple.com/us/app/indrive-save-on-city-rides/id780125801"
                        target="_blank"
                        className="block mt-6 w-fit"
                    >
                        <img
                            src="/images/app-store-badge.png"
                            alt="Descargar en App Store"
                            className="h-12 hover:scale-105 transition-transform"
                        />
                    </a>

                    {/* Espacio capturas */}
                    <div className="mt-8">
                        <p className="font-semibold text-secondary mb-2">Capturas de ejemplo:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="aspect-[9/16] bg-neutral-100 rounded-xl border border-neutral-300 flex items-center justify-center text-neutral-500">
                                iOS Imagen 1
                            </div>
                            <div className="aspect-[9/16] bg-neutral-100 rounded-xl border border-neutral-300 flex items-center justify-center text-neutral-500">
                                iOS Imagen 2
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
}
