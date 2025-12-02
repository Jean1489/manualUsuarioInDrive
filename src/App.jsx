import { useState } from "react";
import { Menu, Book, Home, List } from "lucide-react";
import logo from './assets/logo.png';

import IndexPage from "./pages/Indice";
import PortadaPage from "./pages/Portada";
import IntroduccionPage from "./pages/Introduccion";

export default function App() {
    const [menuOpen, setMenuOpen] = useState(true);
    const [activePage, setActivePage] = useState("portada");

    const pages = [
        { id: "portada", name: "Portada", icon: Home, component: <PortadaPage /> },
        { id: "indice", name: "Índice", icon: List, component: <IndexPage setActivePage={setActivePage} /> },
        { id: "introduccion", name: "Introducción", icon: Book, component: <IntroduccionPage /> },
    ];

    const loadPageComponent = () => {
        const page = pages.find((p) => p.id === activePage);
        return page ? page.component : <div>404 - Página no encontrada</div>;
    };

    const activePageName = pages.find((p) => p.id === activePage)?.name || "Manual";

    return (
        <div className="flex h-screen bg-neutral-50 font-sans overflow-hidden">
            {/* SIDEBAR */}
            <aside
                className={`
          relative flex flex-col bg-white border-r border-neutral-200 
          transition-all duration-300 ease-out shadow-sm
          ${menuOpen ? "w-64" : "w-20"}
        `}
            >
                {/* Header fijo del Sidebar */}
                <div className="flex-shrink-0 p-4 border-b border-neutral-200">
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="Logo" className="w-8 h-8 rounded-md flex-shrink-0" />
                        {menuOpen && (
                            <span className="text-lg font-bold text-neutral-900 truncate">
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
                                        ? "bg-indrive/10 text-neutral-900 font-semibold border-indrive"
                                        : "hover:bg-neutral-100 text-neutral-700 border-transparent"
                                    }
                `}
                                title={!menuOpen ? page.name : undefined}
                            >
                                <Icon
                                    size={22}
                                    className={`flex-shrink-0 ${isActive ? "text-indrive" : "text-neutral-500"}`}
                                />
                                {menuOpen && <span className="truncate">{page.name}</span>}
                            </button>
                        );
                    })}
                </nav>

                {/* Toggle button pegado al sidebar */}
                <div className="flex-shrink-0 p-4 border-t border-neutral-200">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className={`
              w-full h-12 flex items-center justify-center rounded-lg
              bg-indrive text-white shadow-md hover:bg-indrive-dark 
              transition-all duration-200 hover:scale-105
              ${!menuOpen ? "mx-auto" : ""}
            `}
                        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                    >
                        <Menu size={22} />
                        {menuOpen && <span className="ml-2 font-medium"></span>}
                    </button>
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header fijo */}
                <header className="flex-shrink-0 bg-white border-b border-neutral-200 shadow-sm px-6 py-4">
                    <div className="flex items-center gap-3">
                        <div className="w-1 h-6 bg-indrive rounded-full"></div>
                        <h1 className="text-2xl font-bold text-neutral-900">{activePageName}</h1>
                    </div>
                </header>

                {/* Contenido scrollable */}
                <main className="flex-1 overflow-y-auto p-6 animate-fadeIn">
                    <div className="max-w-5xl mx-auto">
                        {loadPageComponent()}
                    </div>
                </main>
            </div>
        </div>
    );
}