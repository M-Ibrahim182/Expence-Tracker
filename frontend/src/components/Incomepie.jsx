import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const Incomepie = () => {
    const incomeData = JSON.parse(localStorage.getItem('incomeData')) || [];

    const incomeCategories = {};
    incomeData.forEach(income => {
        if (incomeCategories[income.category]) {
            incomeCategories[income.category] += income.amount;
        } else {
            incomeCategories[income.category] = income.amount;
        }
    });

    const data = {
        labels: Object.keys(incomeCategories),
        datasets: [
            {
                label: 'Income by Category',
                data: Object.values(incomeCategories),
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
                text: 'Income by Category',
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

export default Incomepie;
