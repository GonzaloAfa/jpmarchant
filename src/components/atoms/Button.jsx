import React from 'react';
import { cn } from '../../utils/utils';

export const Button = ({
    children,
    className,
    variant = 'primary',
    as: Component = 'button',
    ...props
}) => {
    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200 focus:ring-blue-500",
        secondary: "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 focus:ring-slate-200",
        outline: "bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
        ghost: "bg-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-100",
    };

    return (
        <Component
            className={cn(
                "inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
};
