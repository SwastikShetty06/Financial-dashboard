export const summaryData = {
    aum: {
        value: "12.19 Cr",
        change: "+0.77%",
        changeType: "increase",
    },
    sip: {
        value: "1.39 Lakh",
        change: "+0% MoM",
        changeType: "neutral",
    },
};

export const statCardData = [
    {
        title: "Purchases",
        value: 0,
        amount: "0.00 INR",
        icon: "purchase", // Custom identifier for icon
    },
    {
        title: "Redemptions",
        value: 0,
        amount: "0.00 INR",
        icon: "redemption",
    },
    {
        title: "Rej. Transactions",
        value: 0,
        amount: "0.00 INR",
        icon: "rejected",
    },
    {
        title: "SIP Rejections",
        value: 0,
        amount: "0.00 INR",
        icon: "sip_rejection",
    },
    {
        title: "New SIP",
        value: 0,
        amount: null, // No amount for this card
        icon: "new_sip",
    },
];


export const clientsData = {
    labels: ["Online", "New", "Active", "InActive"],
    datasets: [{
        label: 'Clients',
        data: [3824, 541, 60, 2],
        backgroundColor: [
            '#EF4444', // red-500
            '#F97316', // orange-500
            '#10B981', // emerald-500
            '#3B82F6', // blue-500
        ],
        borderColor: '#ffffff',
        borderWidth: 2,
    }, ],
};

export const sipBusinessData = {
    labels: ["Mar", "Apr", "May", "Jun"],
    datasets: [{
            type: 'bar',
            label: 'SIP Amount (in Cr)',
            data: [2.0, 1.6, 1.6, 1.6],
            backgroundColor: '#3B82F6',
            yAxisID: 'y',
            order: 2,
        },
        {
            type: 'line',
            label: 'No. of SIPs',
            data: [118, 95, 108, 105],
            borderColor: '#10B981',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            fill: true,
            tension: 0.4,
            yAxisID: 'y1',
            order: 1,
        },
    ],
};

export const monthlyMisData = {
    labels: ["Mar", "Apr", "May", "Jun"],
    datasets: [{
            label: 'Dataset 1',
            data: [0.1, 0.4, 0.3, 0.5],
            borderColor: '#EF4444',
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            fill: true,
            tension: 0.4,
        },
        {
            label: 'Dataset 2',
            data: [-0.1, 0.2, 0.1, 0.4],
            borderColor: '#3B82F6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            fill: true,
            tension: 0.4,
        },
        {
            label: 'Dataset 3',
            data: [0, 0.1, 0.3, 0.2],
            borderColor: '#10B981',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            fill: true,
            tension: 0.4,
        },
    ],
};
