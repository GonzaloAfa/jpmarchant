import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Target, Brain, ShieldAlert } from 'lucide-react';

const SkillCard = ({ title, items, icon: Icon, color }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300"
    >
        <div className={`p-4 rounded-2xl ${color} w-fit mb-6`}>
            <Icon className="text-white" size={28} />
        </div>
        <h4 className="heading-modern text-2xl font-bold text-slate-900 mb-6">{title}</h4>
        <ul className="space-y-4">
            {items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-blue-500 mt-1 shrink-0" />
                    <span className="text-slate-600 pt-sans text-lg">{item}</span>
                </li>
            ))}
        </ul>
    </motion.div>
);

const Skills = () => {
    return (
        <div className="py-12">
            <div className="max-w-3xl mb-16">
                <h2 className="heading-modern text-4xl font-bold text-slate-900 mb-6 uppercase tracking-tight">
                    Líneas de <span className="text-blue-600">Trabajo</span> e Interés
                </h2>
                <p className="text-xl text-slate-500 pt-sans leading-relaxed text-justify">
                    He desarrollado mi carrera integrando la práctica clínica con la investigación social, especializándome en contextos de vulnerabilidad y dinámicas de poder.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <SkillCard
                    title="Adultos"
                    icon={Brain}
                    color="bg-blue-600"
                    items={['Trastornos del ánimo', 'Duelos complejos', 'Violencia Intrafamiliar', 'Relaciones de pareja']}
                />
                <SkillCard
                    title="Infancia"
                    icon={Target}
                    color="bg-indigo-600"
                    items={['Déficit de Atención (TDA)', 'Convivencia Escolar', 'Reparación de trauma temprano']}
                />
                <SkillCard
                    title="Investigación"
                    icon={ShieldAlert}
                    color="bg-slate-900"
                    items={['Violencia de género', 'Represión política', 'Familia y dinámicas de poder', 'Impacto en salud pública']}
                />
            </div>
        </div>
    );
};

export default Skills;
