import React, { useState } from 'react';

const FormModal = ({ type, onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    sourceOrItem: '',
    amount: '',
    date: '',
    category: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = {
      ...formData,
      amount: parseFloat(formData.amount),
    };

    // Getting DAta from local storage
    const storedData = JSON.parse(localStorage.getItem(type === 'income' ? 'incomeData' : 'expenseData')) || [];

    // Add new data and update localStorage
    const updatedData = [newData, ...storedData];
    localStorage.setItem(type === 'income' ? 'incomeData' : 'expenseData', JSON.stringify(updatedData));

    onSubmit(newData); // Submit data to parent
    onClose(); // Close wala button
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
      <div className='bg-white text-black rounded-lg p-6 w-[400px]'>
        <h2 className='text-xl font-bold mb-4'>{type === 'income' ? 'New Income' : 'New Expense'}</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block mb-2'>
              {type === 'income' ? 'Source' : 'Item'}
            </label>
            <input
              type='text'
              name='sourceOrItem'
              value={formData.sourceOrItem}
              onChange={handleChange}
              className='w-full p-2 border rounded'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Amount</label>
            <input
              type='number'
              name='amount'
              value={formData.amount}
              onChange={handleChange}
              className='w-full p-2 border rounded'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Date</label>
            <input
              type='date'
              name='date'
              value={formData.date}
              onChange={handleChange}
              className='w-full p-2 border rounded'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Category</label>
            <input
              type='text'
              name='category'
              value={formData.category}
              onChange={handleChange}
              className='w-full p-2 border rounded'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Description</label>
            <textarea
              name='description'
              value={formData.description}
              onChange={handleChange}
              className='w-full p-2 border rounded'
            />
          </div>
          <div className='flex justify-end'>
            <button type='submit' className='button'>
              Submit
            </button>
            <button type='button' className='button ml-2' onClick={onClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
