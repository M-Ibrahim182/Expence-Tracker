import React, { useState, useEffect } from 'react';
import FormModal from '../components/FormModal';
import { FaTrash } from "react-icons/fa6";

const Income = () => {
  const [income, setIncome] = useState([]);
  const [formType, setFormType] = useState(null);

  useEffect(() => {
    const storedIncome = JSON.parse(localStorage.getItem('incomeData')) || [];
    setIncome(storedIncome);
  }, []);

  const handleSubmit = (formData) => {
    const newData = {
      ...formData,
      source: formData.sourceOrItem,
    };
    const updatedIncome = [newData, ...income];
    setIncome(updatedIncome);
    localStorage.setItem('incomeData', JSON.stringify(updatedIncome));
  };

  const deleteIncome = (index) => {
    const updatedIncome = income.filter((_, i) => i !== index);
    setIncome(updatedIncome);
    localStorage.setItem('incomeData', JSON.stringify(updatedIncome));
  };

  const toggleForm = (type) => {
    setFormType(type);
  };

  const closeModal = () => {
    setFormType(null);
  };

  return (
    <div className='page_bg'>
      <div className='page_bg-inner text-white'>
        <div className='flex justify-between'>
          <h1 className='text-4xl font-extrabold tracking-wides'>Income</h1>
          <button className='button mr-2' onClick={() => toggleForm('income')}>
            New Income
          </button>
        </div>
        <div className='mt-5 rounded p-0'>
          <div className='w-full h-[2px] bg-slate-500 mt-4'></div>
          <div className='flex bg-gray-900 text-gray-500 p-4 rounded justify-between'>
            <h3 className='tag'>SOURCE</h3>
            <h3 className='tag'>AMOUNT</h3>
            <h3 className='tag'>DATE</h3>
            <h3 className='tag'>CATEGORY</h3>
            <h3 className='tag'>DESCRIPTION</h3>
            <h3 className='tag'>DELETE</h3>

          </div>
          <div className='max-h-[782px] overflow-auto'>
            {income.map((data, index) => (
              <div key={index} className={`flex p-4 m-[1px] justify-between rounded ${index % 2 === 0 ? 'bg-gray-500' : 'bg-gray-600'}`}>
                <h3 className='list'>{data.source}</h3>
                <h3 className='list'>{data.amount}</h3>
                <h3 className='list'>{data.date}</h3>
                <h3 className='list '>{data.category}</h3>
                <h3 className='list break-words overflow-hidden'>{data.description}</h3>
                <button onClick={() => deleteIncome(index)} className='ml-2 text-red-600 flex justify-center w-1/6'>
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {formType && (
        <FormModal
          type={formType}
          onSubmit={handleSubmit}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Income;
