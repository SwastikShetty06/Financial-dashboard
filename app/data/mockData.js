// Mock data reflecting the values in the assignment screenshot

export const summaryData = {
    aum: {
        value: "12.19 Cr",
        change: "+0.77% MoM",
        changeType: "increase",
    },
    sip: {
        value: "1.39 Lakh",
        change: "+0% MoM",
        changeType: "increase", // Set to increase to show green arrow as in image
    },
};

export const statCardData = [{
    title: "Purchases",
    value: 0,
    amount: "0.00 INR",
    icon: "purchase",
}, {
    title: "Redemptions",
    value: 0,
    amount: "0.00 INR",
    icon: "redemption",
}, {
    title: "Rej. Transactions",
    value: 0,
    amount: "0.00 INR",
    icon: "rejected",
}, {
    title: "SIP Rejections",
    value: 0,
    amount: "0.00 INR",
    icon: "sip_rejection",
}, {
    title: "New SIP",
    value: 0,
    amount: "0.00 INR",
    icon: "new_sip",
}, ];

// Data for Bubble chart
export const clientsData = {
    datasets: [{
        label: 'Online',
        data: [{ x: 35, y: 40, r: 45, v: 3824 }], // x, y, radius, value
        backgroundColor: '#EF4444', // red-500
    }, {
        label: 'New',
        data: [{ x: 68, y: 30, r: 25, v: 541 }],
        backgroundColor: '#F97316', // orange-500
    }, {
        label: 'Active',
        data: [{ x: 75, y: 65, r: 15, v: 60 }],
        backgroundColor: '#10B981', // emerald-500
    }, {
        label: 'InActive',
        data: [{ x: 55, y: 70, r: 8, v: 2 }],
        backgroundColor: '#3B82F6', // blue-500
    }, ],
};


export const sipBusinessData = {
    labels: ["Mar", "Apr", "May", "Jun"],
    datasets: [{
        type: 'bar',
        label: 'SIP Amount',
        data: [1.8, 1.6, 1.6, 1.6],
        backgroundColor: '#3B82F6',
        yAxisID: 'y',
        order: 2,
    }, {
        type: 'line',
        label: 'No. of SIPs',
        data: [118, 95, 108, 105],
        borderColor: '#EF4444', // Red line as in image
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        fill: false, // In the image, the line chart area is not filled
        tension: 0.4,
        yAxisID: 'y1',
        order: 1,
    }, ],
};

export const monthlyMisData = {
    labels: ["Mar", "Apr", "May", "Jun"],
    datasets: [{
        label: 'Dataset 1',
        data: [0.1, 0.4, 0.3, 0.55],
        borderColor: '#10B981', // Green
        backgroundColor: 'rgba(16, 185, 129, 0.2)',
        fill: true,
        tension: 0.4,
    }, {
        label: 'Dataset 2',
        data: [-0.05, 0.2, 0.1, 0.4],
        borderColor: '#3B82F6', // Blue
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        fill: true,
        tension: 0.4,
    }, {
        label: 'Dataset 3',
        data: [0, 0.1, 0.3, 0.2],
        borderColor: '#F97316', // Orange/Red-ish
        backgroundColor: 'rgba(249, 115, 22, 0.2)',
        fill: true,
        tension: 0.4,
    }, ],
};
