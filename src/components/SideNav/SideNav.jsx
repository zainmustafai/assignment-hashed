import React from 'react'

import { menuItems } from './MenuItems'
import Logo from './Logo'

const SideNav = ({ dataPuller }) => {
    return (
        <section className='w-screen h-screen bg-dark fixed bg-opacity-30 top-0 left-0 z-10 font-sans'>
            <div className='min-h-full max-h-screen overflow-auto bg-white w-min pl-[42px] pr-[34px] pt-[50px] '>
                {/* LOGO AND TOGGLE */}
                <div className='flex justify-between items-center mb-8'>
                    <div className='flex justify-start gap-4 items-center'>
                        <Logo />
                        <h1 className='text-[#5679FF] font-semibold text-2xl' >NSTYLE</h1>
                    </div>
                    <button
                        onClick={() => dataPuller(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="29" viewBox="0 0 34 29" fill="none">
                            <rect x="33.5455" y="28.3085" width="33.426" height="5.14247" transform="rotate(-180 33.5455 28.3085)" fill="#101928" />
                            <rect x="33.5454" y="16.7384" width="23.1411" height="5.14247" transform="rotate(-180 33.5454 16.7384)" fill="#101928" />
                            <rect x="33.5454" y="5.1676" width="33.426" height="5.14247" transform="rotate(-180 33.5454 5.1676)" fill="#101928" />
                        </svg>
                    </button>
                </div>
                
                {
                    menuItems.map((item) => {
                        return <button className='flex items-center my-5 gap-6 py-[18px] pl-[24px] rounded-lg w-[300px] h-[70px] text-xl font-normal hover:bg-light hover:text-white' key={item.title} >
                            <span>
                            {item.icon}
                            </span>
                            {item.title}
                        </button>
                    })
                }
            </div>
        </section>
    )
}

export default SideNav