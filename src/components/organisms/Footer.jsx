import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { Heading, Text } from '../atoms/Typography';

export const Footer = () => {
    return (
        <footer className="bg-slate-900 py-16 text-slate-400 mt-20" role="contentinfo">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="space-y-4">
                    <Heading level={4} className="text-white">Juan Paulo Marchant</Heading>
                    <Text variant="small" className="text-slate-400 leading-relaxed">
                        Psicólogo Clínico e Investigador.<br />
                        Especialista en Género y políticas públicas de reparación.
                    </Text>
                </div>

                <div className="space-y-4">
                    <Heading level={4} className="text-white">Contacto</Heading>
                    <ul className="space-y-2 text-sm" aria-label="Información de contacto">
                        <li><a href="mailto:contacto@jpmarchant.cl" className="hover:text-blue-400 transition-colors focus:outline-none focus:underline">contacto@jpmarchant.cl</a></li>
                        <li>Santiago, Chile</li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <Heading level={4} className="text-white">Redes</Heading>
                    <div className="flex gap-4">
                        <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-white transition-all focus:ring-2 focus:ring-blue-500" aria-label="LinkedIn">
                            <Linkedin size={20} aria-hidden="true" />
                        </a>
                        <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-white transition-all focus:ring-2 focus:ring-blue-500" aria-label="Twitter">
                            <Twitter size={20} aria-hidden="true" />
                        </a>
                        <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-white transition-all focus:ring-2 focus:ring-blue-500" aria-label="Email">
                            <Mail size={20} aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between gap-4 text-xs">
                <Text variant="tiny" className="text-slate-500">© 2026 JPMarchant. Todos los derechos reservados.</Text>
                <Text variant="tiny" className="text-slate-600">Diseñado para la confianza y el rigor académico.</Text>
            </div>
        </footer>
    );
};
