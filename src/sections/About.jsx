import React from 'react';
import { motion } from 'framer-motion';
import { Quote, BookOpen, Heart, ShieldCheck } from 'lucide-react';
import { Heading, Text } from '../components/atoms/Typography';
import { Badge } from '../components/atoms/Badge';

const About = () => {
    return (
        <section className="py-12 flex flex-col gap-16" aria-label="Acerca de Juan Paulo">
            {/* Value Proposition / Hero Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <Badge variant="blue">
                        <Heart size={14} aria-hidden="true" />
                        Enfoque Humanista
                    </Badge>

                    <Heading level={2} className="md:text-5xl">
                        Terapia <span className="text-blue-600">Humanista</span> Experiencial y <span className="text-blue-600">Existencial</span>
                    </Heading>

                    <Text>
                        Comprendo la terapia como un encuentro genuino entre dos personas. Mi formación doctoral me permite una comprensión profunda de los contextos sociales, mientras que mi enfoque humanista garantiza un espacio de escucha activa, libertad y descubrimiento personal.
                    </Text>

                    <div className="grid grid-cols-2 gap-6 pt-6" role="list">
                        <article className="flex items-start gap-3" role="listitem">
                            <div className="p-2 rounded-lg bg-white shadow-sm border border-slate-100 italic">
                                < BookOpen className="text-blue-600" size={20} aria-hidden="true" />
                            </div>
                            <div>
                                <Heading level={4} className="text-sm">Rigor Académico</Heading>
                                <Text variant="small">Doctor en Políticas Públicas (Máximo Honor).</Text>
                            </div>
                        </article>
                        <article className="flex items-start gap-3" role="listitem">
                            <div className="p-2 rounded-lg bg-white shadow-sm border border-slate-100 italic">
                                <ShieldCheck className="text-blue-600" size={20} aria-hidden="true" />
                            </div>
                            <div>
                                <Heading level={4} className="text-sm">Experiencia Nacional</Heading>
                                <Text variant="small">Ex-Coordinador Nacional SERNAM.</Text>
                            </div>
                        </article>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-transparent rounded-3xl -z-10" aria-hidden="true" />
                    <figure className="aspect-[4/5] bg-slate-200 rounded-2xl overflow-hidden shadow-2xl relative group">
                        <figcaption className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8 z-10">
                            <p className="text-white italic text-lg leading-snug">
                                "Dos personas expertas se unen para caminar juntos y acompañarse por el tiempo que sea necesario."
                            </p>
                        </figcaption>
                        <img
                            src="/img/JuanPauloMarchant-Perfil.jpg"
                            alt="Retrato de Juan Paulo Marchant Espinoza"
                            className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
                        />
                    </figure>
                </motion.div>
            </div>

            {/* Philosophy Section */}
            <article className="bg-slate-900 text-white rounded-[2rem] p-8 md:p-12 relative overflow-hidden" aria-labelledby="phil-title">
                <Quote className="absolute top-12 left-12 text-blue-500/20" size={120} aria-hidden="true" />
                <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
                    <Heading level={3} id="phil-title" className="text-white">Mi Filosofía</Heading>
                    <blockquote className="text-xl text-slate-300 leading-relaxed italic pt-sans">
                        "Me mueve la vida en base a lo que considero Justo. Creo firmemente en la posibilidad de elegir, conforme a la presión del entorno con sus altos y bajos, podemos visualizar opciones y asir la que deseamos."
                    </blockquote>
                    <div className="flex justify-center flex-wrap gap-8 grayscale opacity-60 overflow-hidden" aria-label="Filósofos de referencia">
                        <span className="text-xs font-bold uppercase tracking-tighter">Foucault</span>
                        <span className="text-xs font-bold uppercase tracking-tighter">Beauvoir</span>
                        <span className="text-xs font-bold uppercase tracking-tighter">Sartre</span>
                        <span className="text-xs font-bold uppercase tracking-tighter">Rogers</span>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default About;
