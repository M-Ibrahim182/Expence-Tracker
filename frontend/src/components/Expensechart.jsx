import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const Expencechart = () => {
    const expensesData = JSON.parse(localStorage.getItem('expenseData')) || [];
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
    const expenseTotals = Array(6).fill(0);

    expensesData.forEach(expense => {
        const expenseMonth = new Date(expense.date);
        const monthIndex = lastSixMonths.findIndex(month => 
            month.startsWith(expenseMonth.toLocaleString('default', { month: 'long' })) &&
            expenseMonth.getFullYear() === currentDate.getFullYear()
        );
        if (monthIndex !== -1) {
            expenseTotals[monthIndex] += expense.amount;
        }
    });

    const data = {
        labels: lastSixMonths,
        datasets: [
            {
                label: 'Expenses',
                data: expenseTotals,
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
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

export default Expencechart;
