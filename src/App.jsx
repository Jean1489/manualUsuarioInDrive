import { useState } from "react";
import {
    Menu, Book, Home, List, Info, Wrench, HelpCircle
} from "lucide-react";

// Importar todas las páginas REALMENTE
import Portada from "./pages/Portada";
import Indice from "./pages/Indice";
import Introduccion from "./pages/Introduccion";
import Requisitos from "./pages/Requisitos";
import Instalacion from "./pages/Instalacion";
import Interfaz from "./pages/Interfaz";
import Funciones from "./pages/Funciones";
import SolucionProblemas from "./pages/SolucionProblemas";
import Mantenimiento from "./pages/Mantenimiento";
import Soporte from "./pages/Soporte";
import Glosario from "./pages/Glosario";
import Apendices from "./pages/Apendices";

const pages = [
    { id: "portada", label: "Portada", icon: <Home size={18} /> },
    { id: "indice", label: "Índice", icon: <List size={18} /> },
    { id: "introduccion", label: "Introducción", icon: <Book size={18} /> },
    { id: "requisitos", label: "Requisitos", icon: <Info size={18} /> },
    { id: "instalacion", label: "Instalación", icon: <Wrench size={18} /> },
    { id: "interfaz", label: "Interfaz", icon: <Info size={18} /> },
    { id: "funciones", label: "Funciones", icon: <Book size={18} /> },
    { id: "solucion-problemas", label: "Solución de Problemas", icon: <HelpCircle size={18} /> },
    { id: "mantenimiento", label: "Mantenimiento", icon: <Wrench size={18} /> },
    { id: "soporte", label: "Soporte", icon: <HelpCircle size={18} /> },
    { id: "glosario", label: "Glosario", icon: <Book size={18} /> },
    { id: "apendices", label: "Apéndices", icon: <Book size={18} /> },
];

export default function App() {

    // 🔥 Declaración correcta de estados
    const [activePage, setActivePage] = useState("portada");
    const [menuOpen, setMenuOpen] = useState(true);

    // ❗️💥 AQUÍ estaba el error: mover esta función *después* del useState
    const loadPageComponent = () => {
        const sharedProps = { onNavigate: setActivePage };

        switch (activePage) {
            case "portada": return <Portada {...sharedProps} />;
            case "indice": return <Indice {...sharedProps} />;
            case "introduccion": return <Introduccion {...sharedProps} />;
            case "requisitos": return <Requisitos {...sharedProps} />;
            case "instalacion": return <Instalacion {...sharedProps} />;
            case "interfaz": return <Interfaz {...sharedProps} />;
            case "funciones": return <Funciones {...sharedProps} />;
            case "solucion-problemas": return <SolucionProblemas {...sharedProps} />;
            case "mantenimiento": return <Mantenimiento {...sharedProps} />;
            case "soporte": return <Soporte {...sharedProps} />;
            case "glosario": return <Glosario {...sharedProps} />;
            case "apendices": return <Apendices {...sharedProps} />;
            default: return <Portada {...sharedProps} />;
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">

            {/* Sidebar */}
            <div className={`bg-white shadow-lg border-r border-gray-200 transition-all duration-300
                ${menuOpen ? "w-64" : "w-16"}`}>

                <div className="flex items-center gap-2 p-4 border-b">
                    <Book size={24} className="text-green-600" />
                    {menuOpen && <span className="font-bold text-lg">Manual InDrive</span>}
                </div>

                <nav className="mt-2">
                    {pages.map((page) => (
                        <button
                            key={page.id}
                            onClick={() => setActivePage(page.id)}
                            className={`flex items-center gap-3 px-4 py-3 w-full text-left hover:bg-green-100 transition 
                                ${activePage === page.id ? "bg-green-200 font-bold" : ""}`}
                        >
                            {page.icon}
                            {menuOpen && <span>{page.label}</span>}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto">

                <header className="flex items-center gap-3 p-4 bg-white border-b shadow-sm">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="p-2 hover:bg-gray-200 rounded"
                    >
                        <Menu size={22} />
                    </button>

                    <h2 className="text-xl font-semibold capitalize">
                        {activePage.replace("-", " ")}
                    </h2>
                </header>

                <main className="p-6">
                    {loadPageComponent()}
                </main>

            </div>
        </div>
    );
}
