import React, { useState, useEffect } from 'react';
import Incomechart from '../components/Incomechart';
import Expencechart from '../components/Expensechart';
import FormModal from '../components/FormModal';
import { FaWallet, FaMoneyBill, FaUser } from "react-icons/fa6";

const Dashboard = () => {
  // Initialize income and expense data from local storage
  const [income, setIncome] = useState(JSON.parse(localStorage.getItem('incomeData')) || []);
  const [expenses, setExpenses] = useState(JSON.parse(localStorage.getItem('expensesData')) || []);
  const [formtype, setFormType] = useState(null);

  // Sort expenses and income by date (newest first)
  const sortedExpenses = expenses.sort((a, b) => new Date(b.date) - new Date(a.date));
  const sortedIncome = income.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Get the 7 most recent expenses and income
  const recentExpenses = sortedExpenses.slice(0, 7);
  const recentIncome = sortedIncome.slice(0, 7);

  // Handle form submit for both income and expenses
  const handleSubmit = (formData) => {
    if (formtype === 'expence') {
      const newExpense = { ...formData, item: formData.sourceOrItem };
      const updatedExpenses = [newExpense, ...expenses];
      setExpenses(updatedExpenses);
      localStorage.setItem('expensesData', JSON.stringify(updatedExpenses));
    } else {
      const newIncome = { ...formData, source: formData.sourceOrItem };
      const updatedIncome = [newIncome, ...income]; // Merge new income with existing ones
      setIncome(updatedIncome);
      localStorage.setItem('incomeData', JSON.stringify(updatedIncome));
    }
  };

  // Open form
  const toggleForm = (type) => {
    setFormType(type);
  };

  // Close form modal
  const closeModel = () => {
    setFormType(null);
  };

  return (
    <div className='page_bg'>
      <div className='page_bg-inner text-white'>
        <div className='flex flex-row m-11 '>
          <div className='mt-5 rounded-2xl w-1/2 border-gray-500 border mx-2 '>
            <h1 className='text-xl font-bold px-4 py-2'>Recent Expenses</h1>
            <div className='w-full h-px bg-slate-500 '></div>
            <div className='p-4'>
              <ul>
                {recentExpenses.map((expense, index) => (
                  <li key={index} className='flex'>
                    <span className=' w-1/3'>{expense.item}</span>
                    <p className=' w-1/3 text-center'>{expense.category}</p>
                    <p className=' w-1/3 font-bold text-right'>{expense.amount}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='mt-5 rounded-2xl w-1/2 border-gray-500 border mx-2'>
            <h1 className='text-xl font-bold px-4 py-2'>Recent Income</h1>
            <div className='w-full h-px bg-slate-500 '></div>
            <div className='p-4'>
              <ul>
                {recentIncome.map((income, index) => (
                  <li key={index} className='flex '>
                    <span className='w-1/3'>{income.source}</span>
                    <p className='w-1/3 text-center'>{income.category}</p>
                    <p className='font-bold w-1/3 text-right'>{income.amount}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='mt-5 rounded-2xl w-1/2 border-gray-500 border mx-80'>
          <h1 className='text-xl font-bold px-4 py-2'>Quick Access</h1>
          <div className='w-full h-px bg-slate-500 '></div>
          <div className='p-4 flex items-center justify-evenly'>
            <button className='quickbutton' onClick={() => toggleForm('income')}><FaWallet />+New Income</button>
            <button className='quickbutton' onClick={() => toggleForm('expence')}> <FaMoneyBill />+New Expense</button>
            <button className='quickbutton'><FaUser />Edit Profile</button>
          </div>
        </div>

        <div className='flex flex-row'>
          <Incomechart />
          <Expencechart />
        </div>
      </div>

      {formtype && (
        <FormModal type={formtype} onSubmit={handleSubmit} onClose={closeModel} />
      )}
    </div>
  );
}

export default Dashboard;
