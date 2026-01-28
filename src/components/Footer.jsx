import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 py-16 text-slate-400 mt-20">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="space-y-4">
                    <h4 className="text-white font-bold heading-modern text-lg">Juan Paulo Marchant</h4>
                    <p className="text-sm leading-relaxed font-light">
                        Psicólogo Clínico e Investigador.<br />
                        Especialista en Género y políticas públicas de reparación.
                    </p>
                </div>

                <div className="space-y-4">
                    <h4 className="text-white font-bold heading-modern text-lg">Contacto</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="mailto:contacto@jpmarchant.cl" className="hover:text-blue-400 transition-colors">contacto@jpmarchant.cl</a></li>
                        <li>Santiago, Chile</li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h4 className="text-white font-bold heading-modern text-lg">Redes</h4>
                    <div className="flex gap-4">
                        <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-white transition-all">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-white transition-all">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-white transition-all">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 text-xs flex justify-between">
                <span>© 2026 JPMarchant. Todos los derechos reservados.</span>
                <span className="text-slate-600">Diseñado para la confianza y el rigor académico.</span>
            </div>
        </footer>
    );
};

export default Footer;
