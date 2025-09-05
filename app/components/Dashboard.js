"use client";
import { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Download } from 'lucide-react';
import SummaryCard from './SummaryCard';
import TimeFilter from './TimeFilter';
import StatCard from './StatCard';
import ClientsChart from './ClientsChart';
import SipBusinessChart from './SipBusinessChart';
import MonthlyMisChart from './MonthlyMisChart';
import { summaryData, statCardData as statData } from '../data/mockData';

const Dashboard = ({ theme }) => {
    const dashboardRef = useRef(null);

    const handleDownloadPdf = () => {
        const input = dashboardRef.current;
        if (!input) return;

        // Temporarily override styles for PDF generation
        const originalStyles = new Map();
        const elements = input.getElementsByTagName('*');
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            const style = window.getComputedStyle(element);
            const color = style.getPropertyValue('color');
            const bgColor = style.getPropertyValue('background-color');

            originalStyles.set(element, {
                color: element.style.color,
                backgroundColor: element.style.backgroundColor
            });

            if (color.includes('oklch')) {
                element.style.color = 'rgb(0, 0, 0)'; // Fallback to black
            }
            if (bgColor.includes('oklch')) {
                element.style.backgroundColor = 'rgb(255, 255, 255)'; // Fallback to white
            }
        }

        const backgroundColor = theme === 'dark' ? '#1f2937' : '#f9fafb';

        html2canvas(input, {
            scale: 2,
            useCORS: true,
            backgroundColor: backgroundColor,
        }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'mm',
                format: 'a4'
            });

            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
            const ratio = canvasWidth / canvasHeight;

            let imgWidth = pdfWidth;
            let imgHeight = imgWidth / ratio;

            if (imgHeight > pdfHeight) {
                imgHeight = pdfHeight;
                imgWidth = imgHeight * ratio;
            }

            const x = (pdfWidth - imgWidth) / 2;
            const y = (pdfHeight - imgHeight) / 2;

            pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);
            pdf.save('financial-dashboard.pdf');

            // Restore original styles
            originalStyles.forEach((style, element) => {
                element.style.color = style.color;
                element.style.backgroundColor = style.backgroundColor;
            });
        });
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-end">
                <button
                    onClick={handleDownloadPdf}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors"
                >
                    <Download size={16} />
                    Download PDF
                </button>
            </div>
            <div ref={dashboardRef} className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <SummaryCard title="AUM" data={summaryData.aum} />
                    <SummaryCard title="SIP" data={summaryData.sip} />
                </div>
                <TimeFilter />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
                    {statData.map((stat, index) => (
                        <StatCard key={index} data={stat} />
                    ))}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1">
                        <ClientsChart />
                    </div>
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <SipBusinessChart />
                        <MonthlyMisChart />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;