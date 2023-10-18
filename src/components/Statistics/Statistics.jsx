import React from 'react'
import StatCard from '../StatCard/StatCard'
import MoneyIcon from './icons/MoneyIcon'
import CustomerIcon from './icons/CustomerIcon'
import CalendarIcon from './icons/CalendarIcon'

const Statistics = () => {
  return (
    <div className='my-8 grid grid-cols-1 md:grid-cols-3 gap-8'>
        <StatCard
            icon={<MoneyIcon/>}
            title={"Total Revenue"}
            value={'$1,682'}
            increasing={true}
        />
        <StatCard
            icon={<CustomerIcon/>}
            title={"Total Customers"}
            value={'60'}
            increasing={true}
        />
        <StatCard
            icon={<CalendarIcon/>}
            title={"Total Appointments"}
            value={'78'}
            increasing={false}
        />
    </div>
  )
}

export default Statistics