import React from 'react';
import { Mail, Globe, MessageSquare } from 'lucide-react';
import { cn } from '../utils/utils';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 glass border-b border-slate-200/50">
            <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
                <div className="flex flex-col">
                    <h1 className="heading-modern text-2xl md:text-3xl font-bold text-slate-900 leading-tight tracking-tight">
                        Juan Paulo <span className="text-blue-600">Marchant</span>
                    </h1>
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">Psicólogo Clínico</span>
                        <span className="h-1 w-1 bg-slate-300 rounded-full" />
                        <span className="text-sm font-medium text-blue-500 italic">Doctor en Políticas Públicas</span>
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <div className="flex flex-col items-end">
                        <a href="mailto:contacto@jpmarchant.cl" className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors">
                            <Mail size={14} />
                            contacto@jpmarchant.cl
                        </a>
                        <a href="http://www.jpmarchant.cl" className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors">
                            <Globe size={14} />
                            www.jpmarchant.cl
                        </a>
                    </div>

                    <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center gap-2 group">
                        <MessageSquare size={16} className="group-hover:scale-110 transition-transform" />
                        Agenda una sesión
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
