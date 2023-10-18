import { List } from '@mui/material'
import React from 'react'
import PortfolioCard from './PortfolioCard'
import iconImage from './MenicureIcon.png';

import Irtaza from './Irtaza.png'
import Faheem from './Faheem.png'
import Alina from './Alina.png'
const Portfolio = () => {
    return (
        <div className='py-[36px] grid grid-cols-1  md:grid-cols-2 gap-[20px] font-sans'>
            {/* Top Products */}
            <section className='px-[15px] boxShadow pt-[30px]'>
                <div className='flex justify-between items-center mb-4 px-[18px] '>
                    <h1 className='text-xl font-semibold '>Top Products</h1>
                    <select className='text-[#79797C] outline-none'>
                        <option>This Month</option>
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
                <List className='max-h-[400px] overflow-auto'>
                    <PortfolioCard iconImage={iconImage} description={"24 Services"} title={"Menicure"} />
                    <PortfolioCard iconImage={iconImage} description={"24 Services"} title={"Menicure"} />
                    <PortfolioCard iconImage={iconImage} description={"24 Services"} title={"Menicure"} />
                    <PortfolioCard iconImage={iconImage} description={"24 Services"} title={"Menicure"} />
                    <PortfolioCard iconImage={iconImage} description={"24 Services"} title={"Menicure"} />
                    <PortfolioCard iconImage={iconImage} description={"24 Services"} title={"Menicure"} />
                    <PortfolioCard iconImage={iconImage} description={"24 Services"} title={"Menicure"} />
                    <PortfolioCard iconImage={iconImage} description={"24 Services"} title={"Menicure"} />
                </List>
            </section>
            {/* Top Team Members */}
            <section className='px-[15px] boxShadow pt-[30px]'>
                <div className='flex justify-between items-center mb-4 px-[18px] '>
                    <h1 className='text-xl font-semibold '>Top Team Members</h1>
                    <select className='text-[#79797C] outline-none'>
                        <option>This Month</option>
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
                <List className='max-h-[400px] overflow-auto'>
                    <PortfolioCard iconImage={Alina} description={"24 Appointments "} title={"Alina Arshad"} />
                    <PortfolioCard iconImage={Irtaza} description={"24 Appointments"} title={"Irtaza Zaidi"} />
                    <PortfolioCard iconImage={Faheem} description={"24 Appointments"} title={"Faheem Altaf"} />
                    <PortfolioCard iconImage={Faheem} description={"24 Appointments"} title={"Faheem Altaf"} />
                    <PortfolioCard iconImage={Faheem} description={"24 Appointments"} title={"Faheem Altaf"} />
                    <PortfolioCard iconImage={Faheem} description={"24 Appointments"} title={"Faheem Altaf"} />
                    <PortfolioCard iconImage={Faheem} description={"24 Appointments"} title={"Faheem Altaf"} />
                    <PortfolioCard iconImage={Faheem} description={"24 Appointments"} title={"Faheem Altaf"} />
                    <PortfolioCard iconImage={Faheem} description={"24 Appointments"} title={"Faheem Altaf"} />
                </List>
            </section>
        </div>
    )
}

export default Portfolio