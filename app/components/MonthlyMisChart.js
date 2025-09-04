"use client";
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { monthlyMisData } from '../data/mockData';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const MonthlyMisChart = () => {
    const [chartData, setChartData] = useState({ datasets: [] });
    const [loading, setLoading] = useState(true);
    const [textColor, setTextColor] = useState('#6b7280'); // Default text color for chart axes

    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            setChartData(monthlyMisData);
            setLoading(false);
        }, 1500);
    }, []);

    // This effect dynamically updates the chart's text color based on the app's theme.
    useEffect(() => {
        const updateChartColors = () => {
            const isDarkMode = document.documentElement.classList.contains('dark');
            // Set text color to a light gray for dark mode and a darker gray for light mode
            setTextColor(isDarkMode ? 'rgba(255, 255, 255, 0.7)' : '#6b7280'); 
        };

        // Set the initial color when the component mounts
        updateChartColors();

        // Use a mutation observer to watch for theme changes (class changes on the <html> element)
        const observer = new MutationObserver(updateChartColors);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });

        // Cleanup the observer when the component unmounts
        return () => {
            observer.disconnect();
        };
    }, []);


    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: textColor, // Apply the dynamic text color
                },
            },
            y: {
                beginAtZero: true,
                 ticks: {
                     color: textColor, // Apply the dynamic text color
                     callback: function(value) {
                        return value + ' Cr';
                    }
                }
            },
        },
        elements: {
            point: {
                radius: 0,
            },
        },
    };

    return (
        <div className="card h-full">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-gray-800 dark:text-white">MONTHLY MIS</h3>
                <button className="text-xs font-semibold text-red-500 hover:underline">View Report</button>
            </div>
             {loading ? (
                 <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
                </div>
            ) : (
                <div className="h-64">
                    <Line data={chartData} options={options} />
                </div>
            )}
        </div>
    );
};

export default MonthlyMisChart;

s