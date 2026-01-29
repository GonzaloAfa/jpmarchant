import React from 'react';
import { Book, BarChart2, Users } from 'lucide-react';
import { Heading, Text } from '../components/atoms/Typography';
import { Badge } from '../components/atoms/Badge';
import { SectionHeader } from '../components/molecules/SectionHeader';
import { PublicationCard } from '../components/molecules/PublicationCard';

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
        <section className="py-12 space-y-16" aria-labelledby="portfolio-title">
            <div id="portfolio-title">
                <SectionHeader
                    title="Investigación"
                    highlight="Académica"
                    description="Contribuciones científicas al campo de la psicología y políticas públicas."
                    badge={<Badge variant="blue">Doctor en Políticas Públicas</Badge>}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {investigations.map((item, index) => (
                    <PublicationCard key={index} item={item} index={index} />
                ))}
            </div>

            <article className="bg-blue-600 p-8 md:p-12 rounded-[2rem] text-white">
                <div className="max-w-2xl">
                    <Heading level={3} className="text-white mb-6">¿Por qué es importante la investigación en terapia?</Heading>
                    <Text className="text-blue-100 italic">
                        Mantenerse en la vanguardia del conocimiento me permite aplicar técnicas de intervención validadas y actualizadas. Mi trabajo sobre reparación de víctimas y violencia de género alimenta directamente las estrategias que utilizamos en sesión para sanar traumas complejos.
                    </Text>
                </div>
            </article>
        </section>
    );
};

export default Portfolio;
