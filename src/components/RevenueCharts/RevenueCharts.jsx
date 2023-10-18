import React from 'react'
import BarsDataset from './BarsDataset'

const RevenueCharts = () => {
  return (
    <div>
      <div className='flex justify-between items-center mb-4 px-[18px] '>
        <h1 className='text-xl font-semibold '>Revenue</h1>
        <select className='text-[#79797C] outline-none'>
          <option>Last Month</option>
          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
          <option>August</option>
          <option>September</option>
          <option>October</option>
          <option>November</option>
          <option>December</option>
        </select>
      </div>
      <BarsDataset />
    </div>
  )
}

export default RevenueCharts