import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookCheck } from 'lucide-react';

const educationData = [
    { period: '2025', title: 'Doctor en Políticas Públicas (Máximo Honor)', institution: 'Universidad Mayor', icon: Award, highlight: true },
    { period: '2011 - 2013', title: 'Magíster© en Estudios de Género y Cultura', institution: 'Universidad de Chile', icon: GraduationCap },
    { period: '2011', title: 'Psicólogo (Distinción Máxima)', institution: 'Universidad de Chile', icon: BookCheck },
    { period: '2010', title: 'Postítulo en Psicoterapia Humanista Experiencial', institution: 'Universidad de Chile', icon: GraduationCap },
    { period: '2009', title: 'Licenciado en Psicología', institution: 'Universidad de Chile', icon: BookCheck },
];

const Education = () => {
    return (
        <div className="py-12">
            <h2 className="heading-modern text-3xl md:text-4xl font-bold text-slate-900 mb-8 md:mb-12 uppercase tracking-tight">
                Formación <span className="text-blue-600">Académica</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                {educationData.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`p-5 md:p-6 rounded-2xl md:rounded-3xl border transition-all duration-300 ${edu.highlight
                                ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200'
                                : 'bg-white text-slate-900 border-slate-100 shadow-sm hover:border-blue-200'
                            }`}
                    >
                        <div className="flex items-start gap-4">
                            <div className={`p-3 rounded-xl md:rounded-2xl shrink-0 ${edu.highlight ? 'bg-white/20' : 'bg-blue-50'}`}>
                                <edu.icon size={24} className={edu.highlight ? 'text-white' : 'text-blue-600'} />
                            </div>
                            <div className="min-w-0">
                                <span className={`text-[10px] md:text-xs font-bold uppercase tracking-widest ${edu.highlight ? 'text-blue-100' : 'text-slate-400'}`}>
                                    {edu.period}
                                </span>
                                <h4 className="text-lg md:text-2xl font-bold heading-modern mt-1 mb-1 leading-tight truncate-multiline">
                                    {edu.title}
                                </h4>
                                <p className={`text-sm md:text-lg pt-sans ${edu.highlight ? 'text-blue-50' : 'text-slate-500'}`}>
                                    {edu.institution}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Education;
