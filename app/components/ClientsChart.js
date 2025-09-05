"use client";
import { useEffect, useState } from 'react';
import { Bubble } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  BubbleController,
} from 'chart.js';
import { clientsData } from '../data/mockData';

ChartJS.register(CategoryScale, LinearScale, PointElement, Tooltip, Legend, BubbleController);

const ClientsChart = () => {
    const [chartData, setChartData] = useState({ datasets: [] });
    const [loading, setLoading] = useState(true);
    const [textColor, setTextColor] = useState('#6b7280');

    useEffect(() => {
        setTimeout(() => {
            setChartData(clientsData);
            setLoading(false);
        }, 1000);
    }, []);
    
    useEffect(() => {
        const updateChartColors = () => {
            const isDarkMode = document.documentElement.classList.contains('dark');
            setTextColor(isDarkMode ? 'rgba(255, 255, 255, 0.7)' : '#6b7280');
        };
        updateChartColors();
        const observer = new MutationObserver(updateChartColors);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);


    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `${context.dataset.label}: ${context.raw.v}`;
                    }
                }
            }
        },
        scales: {
            x: {
                display: false,
                min: 0,
                max: 100,
            },
            y: {
                display: false,
                min: 0,
                max: 100,
            }
        },
    };

    return (
        <div className="card h-full flex flex-col">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-gray-800 dark:text-white">CLIENTS</h3>
                <button className="text-xs font-semibold text-red-500 hover:underline">Download Report</button>
            </div>
            <div className="flex-grow relative">
            {loading ? (
                 <div className="flex justify-center items-center h-full">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-red-500"></div>
                </div>
            ) : (
                <div className="relative h-full w-full min-h-[250px]">
                    <Bubble data={chartData} options={options} />
                    {/* Manually place labels inside the canvas area */}
                    {chartData.datasets.map(dataset => (
                        <div 
                            key={dataset.label}
                            className="absolute flex flex-col items-center justify-center text-gray-800 dark:text-white font-bold"
                            style={{ 
                                left: `${dataset.data[0].x}%`, 
                                top: `${dataset.data[0].y}%`,
                                transform: 'translate(-50%, -50%)',
                                pointerEvents: 'none' // To allow tooltips to show
                            }}
                        >
                           <span className="text-2xl drop-shadow-md">{dataset.data[0].v}</span>
                        </div>
                    ))}
                </div>
            )}
            </div>
            <div className="flex justify-center flex-wrap gap-x-4 gap-y-2 mt-4 text-xs">
                 {chartData.datasets?.map((dataset) => (
                    <div key={dataset.label} className="flex items-center">
                        <span className="h-2 w-2 rounded-full mr-2" style={{ backgroundColor: dataset.backgroundColor }}></span>
                        <span className="text-gray-600 dark:text-gray-300">{dataset.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClientsChart;
