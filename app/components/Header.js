"use client";
import { Search, Bell, Settings, User, LogOut, Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
    "HOME", "CRM", "UTILITIES", "INSURANCE", "ASSETS", "MUTUAL", "RESEARCH",
    "TRANSACT ONLINE", "GOAL GPS", "FINANCIAL PLANNING", "WEALTH REPORT", "OTHER"
];

export default function Header({ theme, toggleTheme }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white dark:bg-gray-900 shadow-md">
            {/* Top Bar */}
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center">
                        <h1 className="text-xl font-bold italic">
                            <span className="text-red-600">Wealth</span> <span className="text-green-500">Elite</span>
                        </h1>
                    </div>
                    <div className="hidden lg:flex flex-1 max-w-xl mx-4">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="in.Live portfolio"
                                className="w-full pl-4 pr-10 py-2 text-sm text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                        <div className="hidden sm:flex items-center space-x-4">
                            <Bell className="h-6 w-6 cursor-pointer hover:text-blue-500" />
                            <Settings className="h-6 w-6 cursor-pointer hover:text-blue-500" />
                            <User className="h-6 w-6 cursor-pointer hover:text-blue-500" />
                            <button className="flex items-center space-x-2 text-sm font-semibold hover:text-blue-500">
                                <LogOut className="h-5 w-5" />
                                <span>LOGOUT</span>
                            </button>
                        </div>
                        <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
                            {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-800" />}
                        </button>
                         <div className="lg:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md">
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Bar */}
            <nav className="bg-red-600 hidden lg:block">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center h-10">
                        <div className="flex items-baseline space-x-1">
                            {navItems.map((item, index) => (
                                <a
                                    key={item}
                                    href="#"
                                    className={`px-3 py-2 rounded-md text-xs font-medium whitespace-nowrap transition-colors duration-200 ${
                                        index === 0
                                            ? 'bg-white text-red-600'
                                            : 'text-red-100 hover:bg-red-700 hover:text-white'
                                    }`}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
            
            {/* Mobile Menu */}
            {isMenuOpen && (
                 <div className="lg:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                         {navItems.map((item, index) => (
                            <a
                                key={item}
                                href="#"
                                className={`block px-3 py-2 rounded-md text-base font-medium ${
                                    index === 0
                                        ? 'bg-red-600 text-white'
                                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                }`}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                     <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center px-5 space-x-4">
                             <Bell className="h-6 w-6 cursor-pointer hover:text-blue-500" />
                            <Settings className="h-6 w-6 cursor-pointer hover:text-blue-500" />
                            <User className="h-6 w-6 cursor-pointer hover:text-blue-500" />
                             <button className="flex items-center space-x-2 text-sm font-semibold hover:text-blue-500">
                                <LogOut className="h-5 w-5" />
                                <span>LOGOUT</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
