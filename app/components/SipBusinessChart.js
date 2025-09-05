"use client";
import { useEffect, useState } from 'react';
import { Chart } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    BarController,
    LineController
} from 'chart.js';
import { sipBusinessData } from '../data/mockData';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    BarController,
    LineController
);

const SipBusinessChart = () => {
    const [chartData, setChartData] = useState({ datasets: [] });
    const [loading, setLoading] = useState(true);

     useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            setChartData(sipBusinessData);
            setLoading(false);
        }, 1200);
    }, []);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                align: 'end',
                labels: {
                    boxWidth: 10,
                    font: { size: 10 }
                }
            },
            title: { display: false },
        },
        scales: {
            x: {
                grid: { display: false }
            },
            y: {
                type: 'linear',
                position: 'left',
                beginAtZero: true,
                 grid: { color: (context) => context.tick.value === 0 ? 'rgba(0, 0, 0, 0.1)' : 'transparent' },
            },
            y1: {
                type: 'linear',
                position: 'right',
                beginAtZero: true,
                grid: { display: false },
                 ticks: {
                    stepSize: 10
                }
            }
        }
    };

    return (
        <div className="card h-full">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-gray-800 dark:text-white">SIP BUSINESS CHART</h3>
                <button className="text-xs font-semibold text-red-500 hover:underline">View Report</button>
            </div>
             {loading ? (
                 <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
                </div>
            ) : (
                <div className="h-64">
                    <Chart type='bar' data={chartData} options={options} />
                </div>
            )}
        </div>
    );
};

export default SipBusinessChart;
