const SummaryCard = ({ title, data }) => {
    const isIncrease = data.changeType === 'increase';
    const changeColor = isIncrease ? 'text-green-500' : 'text-gray-500';

    return (
        <div className="card">
            <div className="flex justify-between items-start mb-2">
                <p className="text-sm text-gray-500 dark:text-gray-400">Current</p>
                <button className="text-xs font-semibold text-red-500 hover:underline">View Report</button>
            </div>
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-3xl font-bold text-gray dark:text-white">{title} {data.value}</h2>
                    <p className={`text-sm font-semibold ${changeColor}`}>{data.change}</p>
                </div>
                <button className="text-xs font-semibold text-green-500 hover:underline">View Trend</button>
            </div>
        </div>
    );
};

export default SummaryCard;
