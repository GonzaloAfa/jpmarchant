import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Target, Brain, ShieldAlert } from 'lucide-react';
import { Heading, Text } from '../components/atoms/Typography';
import { SectionHeader } from '../components/molecules/SectionHeader';

const SkillCard = ({ title, items, icon: Icon, color }) => (
    <motion.article
        whileHover={{ y: -5 }}
        className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300"
    >
        <div className={`p-4 rounded-2xl ${color} w-fit mb-6`}>
            <Icon className="text-white" size={28} aria-hidden="true" />
        </div>
        <Heading level={4} className="mb-6">{title}</Heading>
        <ul className="space-y-4" aria-label={`Competencias en ${title}`}>
            {items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-blue-500 mt-1 shrink-0" aria-hidden="true" />
                    <Text variant="body" className="text-lg">{item}</Text>
                </li>
            ))}
        </ul>
    </motion.article>
);

const Skills = () => {
    return (
        <section className="py-12" aria-labelledby="skills-title">
            <div id="skills-title">
                <SectionHeader
                    title="Líneas de"
                    highlight="Trabajo"
                    description="He desarrollado mi carrera integrando la práctica clínica con la investigación social, especializándome en contextos de vulnerabilidad y dinámicas de poder."
                />
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
        </section>
    );
};

export default Skills;
