import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Building2 } from 'lucide-react';
import { Badge } from '../components/atoms/Badge';
import { Heading, Text } from '../components/atoms/Typography';
import { SectionHeader } from '../components/molecules/SectionHeader';

const workData = [
    { period: '2014 - Presente', company: 'Centro Humain Ltda', role: 'Socio Fundador y Director', description: 'Atención psicológica y servicios integrales de salud con enfoque humanista.' },
    { period: '2013 - Presente', company: 'JPM Capacitación Ltda', role: 'Socio Principal', description: 'Formación y capacitación profesional de alto nivel.' },
    { period: '2012 - 2018', company: 'Servicio Nacional de la Mujer (SERNAM)', role: 'Encargado Nacional Centros de la Mujer', description: 'Gestión nacional de programas de protección y acogida para víctimas de violencia.' },
    { period: '2011 - Presente', company: 'Consulta Particular', role: 'Psicoterapeuta Clínico', description: 'Acompañamiento psicológico especializado en trauma y género.' },
    { period: 'Ex-Docente', company: 'U. Andrés Bello / U. de Talca', role: 'Profesor Adjunto', description: 'Docencia en pregrado y postgrado en facultades de Psicología.' },
];

const Work = () => {
    return (
        <section className="py-12" aria-labelledby="work-title">
            <div id="work-title">
                <SectionHeader title="Experiencia" highlight="Profesional" />
            </div>

            <div className="relative border-l border-slate-200 ml-3 space-y-12">
                {workData.map((job, index) => (
                    <motion.article
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="pl-8 relative"
                    >
                        <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[8.5px] top-1.5 border-4 border-white shadow-sm shadow-blue-200" aria-hidden="true" />

                        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                            <Badge variant="slate" className="w-fit">
                                <Calendar size={12} aria-hidden="true" />
                                {job.period}
                            </Badge>
                            <span className="hidden md:block text-slate-300" aria-hidden="true">•</span>
                            <Text variant="tiny" className="text-blue-600 font-bold flex items-center gap-1">
                                <Building2 size={14} aria-hidden="true" />
                                {job.company}
                            </Text>
                        </div>

                        <Heading level={4} className="mb-2">{job.role}</Heading>
                        <Text className="max-w-2xl">{job.description}</Text>
                    </motion.article>
                ))}
            </div>
        </section>
    );
};

export default Work;
