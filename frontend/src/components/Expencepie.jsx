import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const Expencepie = () => {
    const expensesData = JSON.parse(localStorage.getItem('expenseData')) || [];

    // Group expenses data by category and calculate total amounts for each category
    const expenseCategories = {};
    expensesData.forEach(expense => {
        if (expenseCategories[expense.category]) {
            expenseCategories[expense.category] += expense.amount;
        } else {
            expenseCategories[expense.category] = expense.amount;
        }
    });

    // Prepare the data for the chart
    const data = {
        labels: Object.keys(expenseCategories), 
        datasets: [
            {
                label: 'Expenses by Category',
                data: Object.values(expenseCategories), 
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)', 
                    'rgba(54, 162, 235, 0.6)', 
                    'rgba(255, 206, 86, 0.6)', 
                    'rgba(75, 192, 192, 0.6)', 
                    'rgba(153, 102, 255, 0.6)', 
                    'rgba(255, 159, 64, 0.6)'  
                ],
                hoverBackgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ]
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Expenses by Category',
            }
        }
    };

    return (
        <div className="page_bg-inner">
            <div style={{ width: '500px', height: '500px' }}>
                <Doughnut data={data} options={options} />
            </div>
        </div>
    );
};

export default Expencepie;
