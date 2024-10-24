import React, { useEffect, useState } from 'react';
import images from '../assets/images.js';

const Profile = () => {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);

  const userData = JSON.parse(localStorage.getItem('userData'));
  const incomeData = JSON.parse(localStorage.getItem('incomeData')) || [];
  const expensesData = JSON.parse(localStorage.getItem('expensesData')) || [];

  // Calculate total income and total expenses
  useEffect(() => {
    const incomeTotal = incomeData.reduce((acc, curr) => acc + parseFloat(curr.amount || 0), 0);
    const expensesTotal = expensesData.reduce((acc, curr) => acc + parseFloat(curr.amount || 0), 0);
    
    setTotalIncome(incomeTotal);
    setTotalExpenses(expensesTotal);
  }, [incomeData, expensesData]);

  return (
    <div className='page_bg'>
      <div className='page_bg-inner flex flex-col items-center'>
        <div>
          <div>
            <img src={images.profile} alt="Profile Image" className='w-64' />
          </div>
          <div className='flex space-x-6'>
            <button className='p-2 px-4 bg-gray-500 rounded-full my-5'>Change Profile</button>
            <button className='p-2 px-4 bg-gray-500 rounded-full my-5'>Remove Profile</button>
          </div>
        </div>
        <div className='flex flex-col items-center space-y-6'>
          {userData ? (
            <p className="text-xl font-bold pcolor">{userData.name}</p>
          ) : (
            <p>No user data found.</p>
          )}
          <div className='flex flex-col items-center'>
            <h3 className='text-xl font-bold text-center pcolor'>
              About
            </h3>
            {userData ? (
              <p className='w-96 text-center pcolor'>{userData.about}</p>
            ) : (
              <p>No user data found.</p>
            )}
          </div>
          <div className='flex flex-col items-center'>
            <div className='flex space-x-28 text-xl font-bold'>
              <h4 className='pcolor'>Total Input</h4>
              <p className='pcolor'>{totalIncome}</p> {/* Displays calculated total income */}
            </div>
            <div className='flex space-x-28 text-xl font-bold'>
              <h4 className='pcolor'>Total Output</h4>
              <p className='pcolor'>{totalExpenses}</p> {/* Displays calculated total expenses */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
