const TimeFilter = () => {
    const timeRanges = ["3 Days", "7 Days", "10 Days", "30 Days"];

    return (
        <div className="flex items-center space-x-2 mb-6">
            {timeRanges.map((range, index) => (
                <button
                    key={range}
                    className={`px-3 py-1 text-xs font-semibold rounded-md ${
                        index === 0
                            ? 'bg-red-600 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
                    }`}
                >
                    {range}
                </button>
            ))}
        </div>
    );
};

export default TimeFilter;
