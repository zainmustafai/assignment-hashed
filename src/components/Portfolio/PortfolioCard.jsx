import React from 'react'

const PortfolioCard = ({ title, description, iconImage }) => {
    return (
        <div className='flex items-center justify-start gap-3 py-[20px] px-[18px] border-b ' >
            {/* ICON CONTAINER */}
            <div className='relative rounded-md overflow-hidden w-[72px] aspect-square bg-[#FFEEF4]' >
                <svg className="absolute top-0 right-0" xmlns="http://www.w3.org/2000/svg" width="35" height="52" viewBox="0 0 35 52" fill="none">
                    <circle cx="29.7933" cy="22.3099" r="28.8793" fill="#DFF1D5" />
                </svg>
                <img src={iconImage} alt="CardIcon" className="absolute bottom-0 right-0 w-[65px] object-cover" />
            </div>
            <div>
                <h2 className='text-xl text-dark font-medium'>{title}</h2>
                <p className='font-normal text-[#3F3F44B2] '>{description}</p>
            </div>
        </div>
    )
}

export default PortfolioCard