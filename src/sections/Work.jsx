import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Building2 } from 'lucide-react';

const workData = [
    { period: '2014 - Presente', company: 'Centro Humain Ltda', role: 'Socio Fundador y Director', description: 'Atención psicológica y servicios integrales de salud con enfoque humanista.' },
    { period: '2013 - Presente', company: 'JPM Capacitación Ltda', role: 'Socio Principal', description: 'Formación y capacitación profesional de alto nivel.' },
    { period: '2012 - 2018', company: 'Servicio Nacional de la Mujer (SERNAM)', role: 'Encargado Nacional Centros de la Mujer', description: 'Gestión nacional de programas de protección y acogida para víctimas de violencia.' },
    { period: '2011 - Presente', company: 'Consulta Particular', role: 'Psicoterapeuta Clínico', description: 'Acompañamiento psicológico especializado en trauma y género.' },
    { period: 'Ex-Docente', company: 'U. Andrés Bello / U. de Talca', role: 'Profesor Adjunto', description: 'Docencia en pregrado y postgrado en facultades de Psicología.' },
];

const Work = () => {
    return (
        <div className="py-12">
            <h2 className="heading-modern text-4xl font-bold text-slate-900 mb-12 uppercase tracking-tight">
                Experiencia <span className="text-blue-600">Profesional</span>
            </h2>

            <div className="relative border-l border-slate-200 ml-3 space-y-12">
                {workData.map((job, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="pl-8 relative"
                    >
                        <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[8.5px] top-1.5 border-4 border-white shadow-sm shadow-blue-200" />

                        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase">
                                <Calendar size={12} />
                                {job.period}
                            </span>
                            <span className="hidden md:block text-slate-300">•</span>
                            <span className="text-blue-600 font-bold heading-modern flex items-center gap-1">
                                <Building2 size={16} />
                                {job.company}
                            </span>
                        </div>

                        <h4 className="text-2xl font-bold text-slate-900 mb-3">{job.role}</h4>
                        <p className="text-slate-500 pt-sans text-lg leading-relaxed max-w-2xl">
                            {job.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Work;
