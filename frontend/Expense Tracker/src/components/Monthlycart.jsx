import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import expensesData from '../contents/expencedata';
import incomeData from '../contents/incomedata';

Chart.register(...registerables);

const Monthlycart = () => {
    const currentDate = new Date();
    
    // Helper function to get last 6 months
    const getLastSixMonths = () => {
        const months = [];
        for (let i = 0; i < 6; i++) {
            const monthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - i);
            months.push(monthDate.toLocaleString('default', { month: 'long', year: 'numeric' }));
        }
        return months.reverse(); // To have the latest month first
    };

    const lastSixMonths = getLastSixMonths();

    // Initialize arrays to hold income and expense totals for each month
    const incomeTotals = Array(6).fill(0);
    const expenseTotals = Array(6).fill(0);

    // Process income data
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

    // Process expenses data
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
                label: 'Income',
                data: incomeTotals,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
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
        <div className='page_bg'>
            <div className='page_bg-inner w-64'>
                <Bar className='w-30' data={data} options={options} />
            </div>
        </div>
    );
};

export default Monthlycart;
