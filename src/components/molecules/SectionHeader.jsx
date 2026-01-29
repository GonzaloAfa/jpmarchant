import React from 'react';
import { Heading, Text } from '../atoms/Typography';

export const SectionHeader = ({ title, highlight, description, badge }) => {
    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="max-w-3xl">
                <Heading level={2} className="uppercase">
                    {title} {highlight && <span className="text-blue-600">{highlight}</span>}
                </Heading>
                {description && <Text variant="description">{description}</Text>}
            </div>
            {badge && (
                <div className="flex gap-2">
                    {badge}
                </div>
            )}
        </div>
    );
};
