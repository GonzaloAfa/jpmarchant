import React from 'react';
import { cn } from '../../utils/utils';

export const Heading = ({ level = 1, children, className, ...props }) => {
    const Tag = `h${level}`;
    const baseStyles = "heading-modern font-bold tracking-tight text-slate-900";
    const levels = {
        1: "text-4xl md:text-5xl lg:text-6xl",
        2: "text-3xl md:text-4xl",
        3: "text-2xl md:text-3xl",
        4: "text-xl md:text-2xl",
    };

    return (
        <Tag
            className={cn(baseStyles, levels[level], className)}
            {...props}
        >
            {children}
        </Tag>
    );
};

export const Text = ({ children, className, variant = 'body', ...props }) => {
    const variants = {
        body: "text-lg pt-sans text-slate-600 leading-relaxed",
        small: "text-sm text-slate-500",
        tiny: "text-[10px] md:text-xs font-bold uppercase tracking-widest",
        description: "text-slate-500 mt-2",
    };

    return (
        <p
            className={cn(variants[variant], className)}
            {...props}
        >
            {children}
        </p>
    );
};
