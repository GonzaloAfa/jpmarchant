import React from 'react';
import { Header } from '../organisms/Header';
import { Footer } from '../organisms/Footer';

export const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900 bg-bg">
            <Header />
            <main className="flex-grow focus:outline-none" id="main-content" tabIndex="-1">
                {children}
            </main>
            <Footer />
        </div>
    );
};
