"use client";
import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { clientsData } from '../data/mockData';

ChartJS.register(ArcElement, Tooltip, Legend);

const ClientsChart = () => {
    const [chartData, setChartData] = useState({ datasets: [] });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            setChartData(clientsData);
            setLoading(false);
        }, 1000);
    }, []);

    const totalClients = chartData.datasets[0]?.data.reduce((a, b) => a + b, 0) || 0;

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
                        return `${context.label}: ${context.raw}`;
                    }
                }
            }
        },
        cutout: '60%',
    };

    return (
        <div className="card h-full">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-gray-800 dark:text-white">CLIENTS</h3>
                <button className="text-xs font-semibold text-red-500 hover:underline">Download Report</button>
            </div>
            {loading ? (
                 <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
                </div>
            ) : (
                <div className="relative h-64 w-full">
                    <Doughnut data={chartData} options={options} />
                     <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-4xl font-bold text-gray-800 dark:text-white">{totalClients}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Total Clients</span>
                    </div>
                </div>
            )}
            <div className="flex justify-center flex-wrap gap-x-4 gap-y-2 mt-4 text-xs">
                 {chartData.labels?.map((label, index) => (
                    <div key={index} className="flex items-center">
                        <span className="h-2 w-2 rounded-full mr-2" style={{ backgroundColor: chartData.datasets[0].backgroundColor[index] }}></span>
                        <span>{label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClientsChart;