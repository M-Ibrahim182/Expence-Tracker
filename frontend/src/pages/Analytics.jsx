import React from 'react'
import Incomechart from '../components/Incomechart'
import Expencechart from '../components/Expensechart'
import Incomepie from '../components/Incomepie'
import Expencepie from '../components/Expencepie'

const Analytics = () => {
  return (
    <div className='page_bg '>
            <div className='flex flex-col page_bg-inner text-white flex-wrap h-1/2'>
              <div className='flex'>
                <Incomechart className='w-30'/>
                <Expencechart/>
              </div>
              <div className='flex h-1/2'>
                  <Incomepie/>
                  <Expencepie/>
              </div>
            </div>
</div>  )
}

export default Analytics