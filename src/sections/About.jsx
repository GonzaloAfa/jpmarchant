import React from 'react';
import { motion } from 'framer-motion';
import { Quote, BookOpen, Heart, ShieldCheck } from 'lucide-react';

const About = () => {
    return (
        <div className="py-12 flex flex-col gap-16">
            {/* Value Proposition / Hero Content */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
                        <Heart size={14} />
                        Enfoque Humanista
                    </div>
                    <h2 className="heading-modern text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                        Terapia <span className="text-blue-600">Humanista</span> Experiencial y <span className="text-blue-600">Existencial</span>
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed font-light pt-sans">
                        Comprendo la terapia como un encuentro genuino entre dos personas. Mi formación doctoral me permite una comprensión profunda de los contextos sociales, mientras que mi enfoque humanista garantiza un espacio de escucha activa, libertad y descubrimiento personal.
                    </p>

                    <div className="grid grid-cols-2 gap-6 pt-6">
                        <div className="flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-white shadow-sm border border-slate-100 italic">
                                <BookOpen className="text-blue-600" size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm">Rigor Académico</h4>
                                <p className="text-xs text-slate-500">Doctor en Políticas Públicas (Máximo Honor).</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-white shadow-sm border border-slate-100">
                                <ShieldCheck className="text-blue-600" size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm">Experiencia Nacional</h4>
                                <p className="text-xs text-slate-500">Ex-Coordinador Nacional SERNAM.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-transparent rounded-3xl -z-10" />
                    <div className="aspect-[4/5] bg-slate-200 rounded-2xl overflow-hidden shadow-2xl relative group">
                        {/* Placeholder for Profile - Suggesting a more "approachable" photo */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                            <p className="text-white italic text-lg leading-snug">
                                "Dos personas expertas se unen para caminar juntos y acompañarse por el tiempo que sea necesario."
                            </p>
                        </div>
                        <img
                            src="/img/JuanPauloMarchant-Perfil.jpg"
                            alt="Juan Paulo Marchant"
                            className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </motion.div>
            </section>

            {/* Philosophy Section */}
            <section className="bg-slate-900 text-white rounded-[2rem] p-12 relative overflow-hidden">
                <Quote className="absolute top-12 left-12 text-blue-500/20" size={120} />
                <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
                    <h3 className="heading-modern text-3xl font-bold">Mi Filosofía</h3>
                    <p className="text-xl text-slate-300 leading-relaxed italic pt-sans">
                        "Me mueve la vida en base a lo que considero Justo. Creo firmemente en la posibilidad de elegir, conforme a la presión del entorno con sus altos y bajos, podemos visualizar opciones y asir la que deseamos."
                    </p>
                    <div className="flex justify-center gap-8 grayscale opacity-60 overflow-hidden">
                        {/* Icons represent authors mentioned */}
                        <span className="text-xs font-bold uppercase tracking-tighter shrink-0">Foucault</span>
                        <span className="text-xs font-bold uppercase tracking-tighter shrink-0">Beauvoir</span>
                        <span className="text-xs font-bold uppercase tracking-tighter shrink-0">Sartre</span>
                        <span className="text-xs font-bold uppercase tracking-tighter shrink-0">Rogers</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
