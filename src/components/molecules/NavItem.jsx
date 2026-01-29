import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/utils';

export const NavItem = ({ active, onClick, icon: Icon, label }) => {
    return (
        <button
            onClick={onClick}
            aria-current={active ? 'page' : undefined}
            className={cn(
                "relative flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-blue-500",
                active
                    ? "text-blue-600 shadow-sm"
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-100/50"
            )}
        >
            {active && (
                <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white rounded-xl -z-10 shadow-sm"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
            )}
            <Icon size={18} className={cn(
                "transition-transform",
                active ? "scale-110" : "group-hover:scale-110"
            )} />
            <span className="text-sm font-bold uppercase tracking-wide hidden md:block">
                {label}
            </span>
        </button>
    );
};
