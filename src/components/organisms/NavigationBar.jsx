import React from 'react';
import { Home, GraduationCap, Briefcase, BarChart, Settings } from 'lucide-react';
import { NavItem } from '../molecules/NavItem';

const navItems = [
    { id: 'about', label: 'Inicio', icon: Home },
    { id: 'education', label: 'Formación', icon: GraduationCap },
    { id: 'work', label: 'Experiencia', icon: Briefcase },
    { id: 'skills', label: 'Especialidad', icon: BarChart },
    { id: 'portfolio', label: 'Publicaciones', icon: Settings },
];

export const NavigationBar = ({ activeSection, onSectionChange }) => {
    return (
        <nav className="flex justify-center mt-12 mb-8" aria-label="Navegación principal">
            <div className="flex items-center gap-1 p-1 bg-white/50 backdrop-blur-md border border-slate-200 rounded-2xl shadow-sm">
                {navItems.map((item) => (
                    <NavItem
                        key={item.id}
                        active={activeSection === item.id}
                        onClick={() => onSectionChange(item.id)}
                        icon={item.icon}
                        label={item.label}
                    />
                ))}
            </div>
        </nav>
    );
};
