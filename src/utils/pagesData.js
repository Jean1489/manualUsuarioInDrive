import Portada from '../pages/Portada'
import Indice from '../pages/Indice'
import Introduccion from '../pages/Introduccion'
import Requisitos from '../pages/Requisitos'
import Instalacion from '../pages/Instalacion'
import Interfaz from '../pages/Interfaz'
import Funciones from '../pages/Funciones'
import SolucionProblemas from '../pages/SolucionProblemas'
import Mantenimiento from '../pages/Mantenimiento'
import Soporte from '../pages/Soporte'
import Glosario from '../pages/Glosario'
import Apendices from '../pages/Apendices'

export const pages = [
    { id: 'portada', title: 'Portada', component: Portada },
    { id: 'indice', title: 'Índice', component: Indice },
    { id: 'introduccion', title: 'Introducción', component: Introduccion },
    { id: 'requisitos', title: 'Requisitos del Sistema', component: Requisitos },
    { id: 'instalacion', title: 'Instalación', component: Instalacion },
    { id: 'interfaz', title: 'Interfaz', component: Interfaz },
    { id: 'funciones', title: 'Funciones', component: Funciones },
    { id: 'solucion-problemas', title: 'Solución de Problemas', component: SolucionProblemas },
    { id: 'mantenimiento', title: 'Mantenimiento', component: Mantenimiento },
    { id: 'soporte', title: 'Soporte Técnico', component: Soporte },
    { id: 'glosario', title: 'Glosario', component: Glosario },
    { id: 'apendices', title: 'Apéndices', component: Apendices }
]
