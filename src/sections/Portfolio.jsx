import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Book, BarChart2, Users } from 'lucide-react';

const investigations = [
    {
        period: '2024',
        title: 'Análisis de las medidas cautelares de los casos de femicidios en Chile (2008-2022)',
        institution: 'Oñati Socio-Legal Series',
        type: 'Investigación Doctoral',
        link: 'https://opo.iisj.net/index.php/osls/article/view/1744',
        icon: BarChart2
    },
    {
        period: '2023',
        title: 'Translation, validation, and adaptation from Spanish to Kreyol of the Depression Scale (CESD-R-20)',
        institution: 'Terapia Psicológica',
        type: 'Salud Mental y Migración',
        link: 'https://teps.cl/index.php/teps/article/view/553',
        icon: Users
    },
    {
        period: '2022',
        title: 'Denunciar violencia de pareja en Chile: Aspectos desde el Aparato Estatal',
        institution: 'Sortuz Oñati Journal',
        type: 'Políticas Públicas',
        link: 'https://opo.iisj.net/index.php/sortuz/article/view/1376',
        icon: Book
    },
    {
        period: '2014',
        title: 'Lágrimas de ceniza: Trauma por desplazamiento en población de Chaitén',
        institution: 'ONEMI / Revista de Ciencias Sociales',
        type: 'Trauma Psicosocial',
        link: 'https://revistasociologiauv.cl/index.php/rcs/article/view/57',
        icon: Book
    },
];

const Portfolio = () => {
    return (
        <div className="py-12 space-y-16">
            <section>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <h2 className="heading-modern text-3xl md:text-4xl font-bold text-slate-900 uppercase tracking-tight">
                            Investigación <span className="text-blue-600">Académica</span>
                        </h2>
                        <p className="text-slate-500 mt-2">Contribuciones científicas al campo de la psicología y políticas públicas.</p>
                    </div>
                    <div className="flex gap-2">
                        <span className="px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-[10px] md:text-xs font-bold uppercase shrink-0">Doctor en Políticas Públicas</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {investigations.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 rounded-xl bg-slate-50 group-hover:bg-blue-50 transition-colors">
                                        <item.icon className="text-slate-400 group-hover:text-blue-600 transition-colors" size={24} />
                                    </div>
                                    <span className="text-xs font-bold text-slate-400 font-sans">{item.period}</span>
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-700 transition-colors">
                                    {item.title}
                                </h4>
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-xs font-semibold text-blue-500 uppercase tracking-wider">{item.type}</span>
                                </div>
                                <p className="text-sm text-slate-500 italic mb-6">{item.institution}</p>
                            </div>

                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm font-bold text-slate-400 group-hover:text-blue-600 transition-colors"
                            >
                                Ver publicación <ExternalLink size={14} />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="bg-blue-600 p-12 rounded-[2rem] text-white">
                <div className="max-w-2xl">
                    <h3 className="heading-modern text-3xl font-bold mb-6">¿Por qué es importante la investigación en terapia?</h3>
                    <p className="text-blue-100 leading-relaxed pt-sans">
                        Mantenerse en la vanguardia del conocimiento me permite aplicar técnicas de intervención validadas y actualizadas. Mi trabajo sobre reparación de víctimas y violencia de género alimenta directamente las estrategias que utilizamos en sesión para sanar traumas complejos.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
