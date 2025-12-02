import { useState } from "react";
import {
    Menu,
    Book,           // Introducción
    Home,           // Portada
    List,           // Índice
    CheckSquare,    // Requisitos Técnicos
    Download,       // Instalación
    Layout,         // Interfaz de Usuario
    Zap,            // Funciones Principales
    AlertCircle,    // Solución de Problemas
    Settings,       // Mantenimiento y Actualizaciones
    MessageCircle,  // Soporte y Contacto
    BookOpen,       // Glosario
    FileText        // Apéndices
} from "lucide-react";
import logo from './assets/logo.png';

import IndexPage from "./pages/Indice";
import PortadaPage from "./pages/Portada";
import IntroduccionPage from "./pages/Introduccion";
import RequisitosPage from "./pages/Requisitos";
import InstalacionPage from "./pages/Instalacion";

export default function App() {
    const [menuOpen, setMenuOpen] = useState(true);
    const [activePage, setActivePage] = useState("portada");

    const pages = [
        { id: "portada", name: "Portada", icon: Home, component: <PortadaPage /> },
        { id: "indice", name: "Índice", icon: List, component: <IndexPage setActivePage={setActivePage} /> },
        { id: "introduccion", name: "Introducción", icon: Book, component: <IntroduccionPage /> },
        { id: "requisitos", name: "Requisitos Técnicos", icon: CheckSquare, component: <RequisitosPage /> },
        { id: "instalacion", name: "Instalación", icon: Download, component: <InstalacionPage /> },
    ];

    const loadPageComponent = () => {
        const page = pages.find((p) => p.id === activePage);
        return page ? page.component : <div>404 - Página no encontrada</div>;
    };

    const activePageName = pages.find((p) => p.id === activePage)?.name || "Manual";

    return (
        <div className="flex h-screen bg-primary font-sans overflow-hidden">
            {/* SIDEBAR - 30% del diseño (color secundario #89A926) */}
            <aside
                className={`
                    relative flex flex-col bg-secondary text-white
                    transition-all duration-300 ease-out shadow-lg
                    ${menuOpen ? "w-64" : "w-20"}
                `}
            >
                {/* Header fijo del Sidebar */}
                <div className="flex-shrink-0 p-4 border-b border-white/20">
                    <div className="flex items-center gap-2">
                        <img
                            src={logo}
                            alt="Logo InDrive"
                            className="w-8 h-8 rounded-md flex-shrink-0 bg-white/10 p-1"
                        />
                        {menuOpen && (
                            <span className="text-lg font-bold text-white truncate">
                                Manual InDrive
                            </span>
                        )}
                    </div>
                </div>

                {/* Navigation con scroll */}
                <nav className="flex-1 overflow-y-auto p-4 space-y-2">
                    {pages.map((page) => {
                        const Icon = page.icon;
                        const isActive = activePage === page.id;

                        return (
                            <button
                                key={page.id}
                                onClick={() => setActivePage(page.id)}
                                className={`
                                    flex items-center gap-3 w-full px-4 py-3 text-left rounded-lg
                                    transition-all duration-200 border-l-4
                                    ${isActive
                                        ? "bg-accent text-white font-semibold border-white shadow-md"
                                        : "hover:bg-white/10 text-white/90 border-transparent"
                                    }
                                `}
                                title={!menuOpen ? page.name : undefined}
                            >
                                <Icon
                                    size={22}
                                    className={`flex-shrink-0 ${isActive ? "text-white" : "text-white/70"}`}
                                />
                                {menuOpen && <span className="truncate">{page.name}</span>}
                            </button>
                        );
                    })}
                </nav>

                {/* Toggle button pegado al sidebar */}
                <div className="flex-shrink-0 p-4 border-t border-white/20">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className={`
                            w-full h-12 flex items-center justify-center rounded-lg
                            bg-accent text-white shadow-md hover:bg-highlight-dark 
                            transition-all duration-200 hover:scale-105
                            ${!menuOpen ? "mx-auto" : ""}
                        `}
                        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                    >
                        <Menu size={22} />
                        {menuOpen && <span className="ml-2 font-medium">Minimizar</span>}
                    </button>
                </div>
            </aside>

            {/* MAIN CONTENT - 60% del diseño (color dominante #FEFFE7) */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header fijo - 10% acento (#596F20) */}
                <header className="flex-shrink-0 bg-white border-b-4 border-accent shadow-sm px-6 py-4">
                    <div className="flex items-center gap-3">
                        <div className="w-1 h-6 bg-accent rounded-full"></div>
                        <h1 className="text-2xl font-bold text-accent">{activePageName}</h1>
                    </div>
                </header>

                {/* Contenido scrollable */}
                <main className="flex-1 overflow-y-auto p-6 animate-fadeIn bg-primary">
                    <div className="max-w-5xl mx-auto">
                        {loadPageComponent()}
                    </div>
                </main>
            </div>
        </div>
    );
}