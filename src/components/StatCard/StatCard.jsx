import React from 'react'
import IncreaseIcon from './IncreaseIcon'
import DecreaseIcon from './DecreaseIcon'

const StatCard = ({
    icon,
    title,
    value,
    increasing
}) => {
    return (
        <div className='py-8 px-4 space-y-6 rounded-lg shadow-sm '>
            <div className='flex items-center justify-between'>
                {icon}
                <p className={`text-2xl font-bold ${increasing ? 'text-[#007930]' : 'text-[#F52525]'}`}>{value}</p>
            </div>
            <div className='flex justify-between items-center'>
                <p className='text-[18px] text-[#3F3F44] font-semibold '>{title}</p>
                {
                    increasing ? <IncreaseIcon /> : <DecreaseIcon />
                }
            </div>
        </div>
    )
}

export default StatCard