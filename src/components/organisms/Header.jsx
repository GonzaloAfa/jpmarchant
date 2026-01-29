import React from 'react';
import { Mail, Globe, MessageSquare } from 'lucide-react';
import { Heading, Text } from '../atoms/Typography';
import { Button } from '../atoms/Button';

export const Header = () => {
    return (
        <header className="sticky top-0 z-50 glass border-b border-slate-200/50" role="banner">
            <div className="max-w-6xl mx-auto px-6 h-24 flex justify-between items-center">
                <div className="flex flex-col">
                    <Heading level={1} className="text-2xl md:text-3xl">
                        Juan Paulo <span className="text-blue-600">Marchant</span>
                    </Heading>
                    <div className="flex items-center gap-2">
                        <Text variant="tiny" className="text-slate-500">Psicólogo Clínico</Text>
                        <span className="h-1 w-1 bg-slate-300 rounded-full" aria-hidden="true" />
                        <Text variant="tiny" className="text-blue-500 italic">Doctor en Políticas Públicas</Text>
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <address className="flex flex-col items-end not-italic">
                        <a
                            href="mailto:contacto@jpmarchant.cl"
                            className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors focus:ring-2 focus:ring-blue-500 rounded px-1"
                        >
                            <Mail size={14} aria-hidden="true" />
                            contacto@jpmarchant.cl
                        </a>
                        <a
                            href="http://www.jpmarchant.cl"
                            className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors focus:ring-2 focus:ring-blue-500 rounded px-1"
                        >
                            <Globe size={14} aria-hidden="true" />
                            www.jpmarchant.cl
                        </a>
                    </address>

                    <Button
                        aria-label="Agendar una sesión de terapia"
                        className="group"
                    >
                        <MessageSquare size={16} className="group-hover:scale-110 transition-transform" aria-hidden="true" />
                        Agenda una sesión
                    </Button>
                </div>
            </div>
        </header>
    );
};
