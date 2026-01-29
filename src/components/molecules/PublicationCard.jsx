import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Heading, Text } from '../atoms/Typography';
import { Badge } from '../atoms/Badge';

export const PublicationCard = ({ item, index }) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between"
        >
            <div>
                <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-xl bg-slate-50 group-hover:bg-blue-50 transition-colors">
                        <item.icon className="text-slate-400 group-hover:text-blue-600 transition-colors" size={24} aria-hidden="true" />
                    </div>
                    <Badge variant="slate">{item.period}</Badge>
                </div>

                <Heading level={4} className="mb-2 group-hover:text-blue-700 transition-colors">
                    {item.title}
                </Heading>

                <Text variant="tiny" className="text-blue-500 mb-4">{item.type}</Text>
                <Text variant="small" className="italic mb-6">{item.institution}</Text>
            </div>

            <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver publicación: ${item.title} (abre en una nueva pestaña)`}
                className="flex items-center gap-2 text-sm font-bold text-slate-400 group-hover:text-blue-600 transition-colors focus:outline-none focus:underline"
            >
                Ver publicación <ExternalLink size={14} />
            </a>
        </motion.article>
    );
};
