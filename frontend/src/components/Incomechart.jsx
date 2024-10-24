import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const Incomechart = () => {
    const incomeData = JSON.parse(localStorage.getItem('incomeData')) || [];
    const currentDate = new Date();
    
    const getLastSixMonths = () => {
        const months = [];
        for (let i = 0; i < 6; i++) {
            const monthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - i);
            months.push(monthDate.toLocaleString('default', { month: 'long', year: 'numeric' }));
        }
        return months.reverse();
    };

    const lastSixMonths = getLastSixMonths();
    const incomeTotals = Array(6).fill(0);

    incomeData.forEach(income => {
        const incomeMonth = new Date(income.date);
        const monthIndex = lastSixMonths.findIndex(month => 
            month.startsWith(incomeMonth.toLocaleString('default', { month: 'long' })) &&
            incomeMonth.getFullYear() === currentDate.getFullYear()
        );
        if (monthIndex !== -1) {
            incomeTotals[monthIndex] += income.amount;
        }
    });

    const data = {
        labels: lastSixMonths,
        datasets: [
            {
                label: 'Income',
                data: incomeTotals,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className='w-1/2'>
            <Bar data={data} options={options} />
        </div>
    );
};

export default Incomechart;
