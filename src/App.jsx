import { useState } from "react";
import { Menu, Book, Home, List } from "lucide-react";

import IndexPage from "./pages/Indice";
import PortadaPage from "./pages/Portada";

const pages = [
    { id: "portada", name: "Portada", icon: Home, component: <PortadaPage /> },
    { id: "indice", name: "Índice", icon: List, component: <IndexPage /> },
];

export default function App() {
    const [menuOpen, setMenuOpen] = useState(true);
    const [activePage, setActivePage] = useState("portada");

    const loadPageComponent = () => {
        const page = pages.find((p) => p.id === activePage);
        return page ? page.component : <div>404 - Página no encontrada</div>;
    };

    return (
        <div className="flex min-h-screen bg-neutral-50 font-sans">

            {/* -------- SIDEBAR -------- */}
            <aside
                className={`
          bg-white border-r border-neutral-200 p-4 transition-all duration-300 ease-out 
          shadow-sm animate-fadeIn
          ${menuOpen ? "w-64" : "w-16"}
        `}
            >
                {/* Header Brand */}
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded-md bg-indrive"></div>
                    {menuOpen && (
                        <span className="text-lg font-bold text-neutral-900">
                            Manual InDrive
                        </span>
                    )}
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-2">
                    {pages.map((page) => {
                        const Icon = page.icon;
                        const isActive = activePage === page.id;

                        return (
                            <button
                                key={page.id}
                                onClick={() => setActivePage(page.id)}
                                className={`
                  flex items-center gap-3 w-full px-4 py-3 text-left rounded-lg
                  transition-all duration-200 animate-fadeIn
                  border-l-4
                  ${isActive
                                        ? "bg-indrive/10 text-neutral-900 font-semibold border-indrive"
                                        : "hover:bg-neutral-100 text-neutral-700 border-transparent"
                                    }
                `}
                            >
                                <Icon
                                    size={22}
                                    className={`
                    flex-shrink-0
                    ${isActive ? "text-indrive" : "text-neutral-500"}
                  `}
                                />
                                {menuOpen && <span>{page.name}</span>}
                            </button>
                        );
                    })}
                </nav>

                {/* Toggle Sidebar */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="absolute bottom-4 left-0 right-0 mx-auto w-12 h-12 flex items-center justify-center rounded-full
                     bg-indrive text-white shadow-md hover:scale-105 transition-transform duration-200"
                >
                    <Menu size={22} />
                </button>
            </aside>

            {/* -------- CONTENT AREA -------- */}
            <main className="flex-1 p-6 animate-fadeIn">
                <div className="max-w-5xl mx-auto">{loadPageComponent()}</div>
            </main>
        </div>
    );
}
