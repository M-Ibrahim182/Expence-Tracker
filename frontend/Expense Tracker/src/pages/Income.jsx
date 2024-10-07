import React from 'react'
import incomeData from '../contents/incomedata'

const Income = () => {

    return (
        <div className='page_bg'>
            <div className='page_bg-inner text-white'>
                <div className='flex justify-between'>
                    <h1 className='text-4xl font-extrabold tracking-widest'>Income</h1>
                    <button className='button'>New Income</button>
                </div>
                <div className='mt-5 rounded p-0'>
                    {/* Header Row */}
                    <div className='flex bg-gray-800 p-4 rounded justify-between'>
                        <h3 className='font-bold w-1/5'>SOURCE</h3>
                        <h3 className='font-bold w-1/5'>AMOUNT</h3>
                        <h3 className='font-bold w-1/5'>DATE</h3>
                        <h3 className='font-bold w-1/5'>CATEGORY</h3>
                        <h3 className='font-bold w-1/5'>DESCRIPTION</h3>
                    </div>

                    {/* Data Rows */}
                    {incomeData.map((data, index) => {
                        return (
                            <div
                                className={`flex p-4 m-[1px] justify-between rounded ${index % 2 === 0 ? 'bg-gray-500' : 'bg-gray-600'}`}>                         
                                <h3 className='font-bold w-1/5'>{data.source}</h3>
                                <h3 className='font-bold w-1/5'>{data.amount}</h3>
                                <h3 className='font-bold w-1/5'>{data.date}</h3>
                                <h3 className='font-bold w-1/5'>{data.category}</h3>
                                <h3 className='font-bold w-1/5 break-words overflow-hidden'>{data.description}</h3> 
                            </div>
                        );
                    })}
                </div>
            </div>

        </div >
    )

}

export default Income