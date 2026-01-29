import React from 'react';
import { cn } from '../../utils/utils';

export const Badge = ({ children, className, variant = 'blue' }) => {
    const variants = {
        blue: "bg-blue-50 text-blue-700 border-blue-100",
        slate: "bg-slate-100 text-slate-600 border-slate-200",
        white: "bg-white/10 text-white border-white/20",
    };

    return (
        <span className={cn(
            "inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] md:text-xs font-bold uppercase tracking-wider",
            variants[variant],
            className
        )}>
            {children}
        </span>
    );
};
