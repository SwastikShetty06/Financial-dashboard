import { Search, Bell, Settings, User, LogOut } from 'lucide-react';

import { Moon, Sun, Download } from 'lucide-react';

const navItems = [
    "HOME", "CRM", "UTILITIES", "INSURANCE", "ASSETS", "MUTUAL", "RESEARCH",
    "TRANSACT ONLINE", "GOAL GPS", "FINANCIAL PLANNING", "WEALTH REPORT", "OTHER"
];

export default function Header({ theme, toggleTheme }) {
    return (
        <header className="bg-white dark:bg-gray-800 shadow-md">
            {/* Top Bar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center">
                        <h1 className="text-xl font-bold italic">
                            <span className="text-red-600">Walte</span> <span className="text-green-500">Elite</span>
                        </h1>
                    </div>
                    <div className="flex-1 max-w-xl mx-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="in.Live portfolio"
                                className="w-full px-4 py-2 text-sm text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                        <Bell className="h-6 w-6 cursor-pointer hover:text-blue-500" />
                        <Settings className="h-6 w-6 cursor-pointer hover:text-blue-500" />
                        <User className="h-6 w-6 cursor-pointer hover:text-blue-500" />
                        <button className="flex items-center space-x-2 text-sm font-semibold hover:text-blue-500">
                            <LogOut className="h-5 w-5" />
                            <span>LOGOUT</span>
                        </button>
                        <div className="flex justify-between items-center">
                    <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
                         {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-800" />}
                    </button>
            </div>
            
                    </div>
                </div>
            </div>

            {/* Navigation Bar */}
            <nav className="bg-red-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center h-12">
                        <div className="flex items-baseline space-x-4 overflow-x-auto">
                            {navItems.map((item, index) => (
                                <a
                                    key={item}
                                    href="#"
                                    className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap ${
                                        index === 0
                                            ? 'bg-red-600 text-white'
                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                    }`}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
