import { useEffect, useState } from 'react';
import { ArrowRightLeft, Ban, CheckCircle, FilePlus, ShoppingCart } from 'lucide-react';

const StatCard = ({ data }) => {
    // State to ensure the component only renders its content on the client-side
    const [isMounted, setIsMounted] = useState(false);

    // After the component mounts, update the state to trigger a re-render
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Render a skeleton placeholder on the server and during the initial client render
    if (!isMounted || !data) {
        return (
            <div className="card animate-pulse">
                <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                        <div className="bg-gray-200 dark:bg-gray-700 rounded-full w-10 h-10"></div>
                        <div>
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 mb-2"></div>
                            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
                        </div>
                    </div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20 self-start"></div>
                </div>
            </div>
        );
    }


    const { title, value, currency } = data;

    // A helper function to select the correct icon based on the card's title
    const getIcon = (title) => {
        switch (title) {
            case 'Purchases':
                return <ShoppingCart size={24} className="text-blue-500" />;
            case 'Redemptions':
                return <ArrowRightLeft size={24} className="text-orange-500" />;
            case 'Rej. Transactions':
                return <Ban size={24} className="text-yellow-500" />;
            case 'SIP Rejections':
                return <CheckCircle size={24} className="text-red-500" />;
            case 'New SIP':
                return <FilePlus size={24} className="text-green-500" />;
            default:
                return null;
        }
    };

    return (
        <div className="card">
            <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                    {/* Icon container */}
                    <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full">
                       {getIcon(title)}
                    </div>
                    {/* Title and Value */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-800 dark:text-white">{title}</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{value} {currency}</p>
                    </div>
                </div>
                 {/* View Report Button */}
                 <button className="text-xs font-semibold text-red-500 hover:underline self-start">View Report</button>
            </div>
        </div>
    );
};

export default StatCard;

