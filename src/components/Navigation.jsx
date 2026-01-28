import React from 'react';
import { User, GraduationCap, Briefcase, BarChart, Settings, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../utils/utils';

const navItems = [
    { id: 'about', label: 'Inicio', icon: Home },
    { id: 'education', label: 'Formación', icon: GraduationCap },
    { id: 'work', label: 'Experiencia', icon: Briefcase },
    { id: 'skills', label: 'Especialidad', icon: BarChart },
    { id: 'portfolio', label: 'Publicaciones', icon: Settings },
];

const Navigation = ({ activeSection, onSectionChange }) => {
    return (
        <nav className="flex justify-center mt-12 mb-8">
            <div className="flex items-center gap-1 p-1 bg-white/50 backdrop-blur-md border border-slate-200 rounded-2xl shadow-sm">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onSectionChange(item.id)}
                        className={cn(
                            "relative flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 group",
                            activeSection === item.id
                                ? "text-blue-600 shadow-sm"
                                : "text-slate-500 hover:text-slate-900 hover:bg-slate-100/50"
                        )}
                    >
                        {activeSection === item.id && (
                            <motion.div
                                layoutId="active-pill"
                                className="absolute inset-0 bg-white rounded-xl -z-10 shadow-sm"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <item.icon size={18} className={cn(
                            "transition-transform",
                            activeSection === item.id ? "scale-110" : "group-hover:scale-110"
                        )} />
                        <span className="text-sm font-bold heading-modern uppercase tracking-wide hidden md:block">
                            {item.label}
                        </span>
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default Navigation;
