"use client";
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

export default function Home() {
    // State to manage the current theme, defaulting to 'dark'
    const [theme, setTheme] = useState('dark');

    // Function to toggle between 'light' and 'dark' themes
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // This effect runs when the theme changes to apply the class to the <html> tag
    useEffect(() => {
        if (typeof window !== "undefined") {   // ✅ ensure only runs in browser
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(theme);
    }
  }, [theme]);


    return (
        // The main container no longer needs the theme class directly
        <main className="bg-gray-100 dark:bg-gray-900 min-h-screen">
            <Header theme={theme} toggleTheme={toggleTheme}/>
            <div className="container mx-auto p-4 sm:p-6 lg:p-8">
                 {/* Pass the theme state and toggle function to the Dashboard */}
                <Dashboard  />
            </div>
        </main>
    );
}

