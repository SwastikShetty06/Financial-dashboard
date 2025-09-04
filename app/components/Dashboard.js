"use client";
import { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import SummaryCard from './SummaryCard';
import TimeFilter from './TimeFilter';
import StatCard from './StatCard';
import ClientsChart from './ClientsChart';
import SipBusinessChart from './SipBusinessChart';
import MonthlyMisChart from './MonthlyMisChart';
import { summaryData, statCardData as statData } from '../data/mockData';

const Dashboard = () => {
    // A ref to the dashboard container element for PDF generation
    const dashboardRef = useRef(null);

    // Function to handle the PDF download process
    const handleDownloadPdf = () => {
        const input = dashboardRef.current;
        if (!input) return;

        // Use html2canvas to capture the dashboard as an image
        html2canvas(input, { 
            scale: 2, // Increase scale for better resolution
            useCORS: true 
        }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            // A4 dimensions in 'mm': 210mm wide, 297mm high
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

            // Calculate image dimensions to fit the PDF page while maintaining aspect ratio
            let imgWidth = pdfWidth;
            let imgHeight = imgWidth / ratio;

            // If the calculated height is greater than the PDF height, adjust based on height instead
            if (imgHeight > pdfHeight) {
                imgHeight = pdfHeight;
                imgWidth = imgHeight * ratio;
            }
            
            // Center the image on the PDF page
            const x = (pdfWidth - imgWidth) / 2;
            const y = (pdfHeight - imgHeight) / 2;

            pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);
            pdf.save('financial-dashboard.pdf');
        });
    };


    return (
        <div className="p-4 md:p-8 space-y-6">
            {/* The ref is attached to this container, which will be captured for the PDF */}
            <div ref={dashboardRef} className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <SummaryCard data={summaryData.aum} />
                    <SummaryCard data={summaryData.sip} />
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


