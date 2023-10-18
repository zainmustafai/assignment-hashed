import React from 'react'
import MenicureIcon from './MenicureIcon.png'

const ServiceCard = ({ iconImage, title, dateString }) => {
    return (
        <div
            className='flex items-center justify-start gap-3 my-[20px]'
        >
            <div
                className='relative rounded-md overflow-hidden w-[48px] aspect-square bg-[#FFEEF4]'>
                <svg
                    className="absolute top-0 right-0"
                    xmlns="http://www.w3.org/2000/svg" width="35" height="52" viewBox="0 0 35 52" fill="none">
                    <circle cx="29.7933" cy="22.3099" r="28.8793" fill="#DFF1D5" />
                </svg>
                <img
                    src={iconImage} alt="CardIcon"
                    className="absolute bottom-0 right-0 w-14 object-cover"
                />
            </div>
            <section className=''>
                <h3 className='text-[16px] font-medium text-dark'>{title}</h3>
                <p className='text-[16px] font-normal text-gray-400'>{dateString}</p>
            </section>
        </div>
    );
};

const AppointmentTable = () => {
    return (
        <div className=' p-10 boxShadow'>
            <h1 className='text-[#3F3F44] text-[26px] my-10 font-semibold font-sans' >Recent Appointments </h1>
            <table className='w-full font-sans'>
                <thead className='h-[42px] text-[#79797C] bg-[#F6F6F6] rounded-lg  overflow-hidden text-sm font-semibold text-left' >
                    <tr className=''>
                        <th className='font-normal p-2 text-[16px]'>Service</th>
                        <th className='font-normal p-2 text-[16px]'>Employee</th>
                        <th className='font-normal p-2 text-[16px]'>Sale</th>
                        <th className='font-normal p-2 text-[16px]'>Earning</th>
                    </tr>
                </thead>
                <tbody className='text-start mt-10'>
                    {/* DIVIDER */}
                    <div className='h-[32px]' />
                    <tr className='border-b'>
                        <td><ServiceCard title={"Menicure"} dateString={"9 july,2022"} iconImage={MenicureIcon} /></td>
                        <td className='text-base text-[#3F3F44]'>Irtaza Zaidi</td>
                        <td className='text-base text-[#3F3F44] '>01</td>
                        <td className='text-[#5679FF] text-base'> <span className='px-3 py-2 bg-gray-200 rounded-lg '>$100.5</span> </td>
                    </tr>

                    <tr className='border-b'>
                        <td><ServiceCard title={"Menicure"} dateString={"9 july,2022"} iconImage={MenicureIcon} /></td>
                        <td className='text-base text-[#3F3F44]'>Irtaza Zaidi</td>
                        <td className='text-base text-[#3F3F44] '>01</td>
                        <td className='text-[#5679FF] text-base'> <span className='px-3 py-2 bg-gray-200 rounded-lg '>$100.5</span> </td>
                    </tr>

                    <tr className='border-b'>
                        <td><ServiceCard title={"Menicure"} dateString={"9 july,2022"} iconImage={MenicureIcon} /></td>
                        <td className='text-base text-[#3F3F44]'>Irtaza Zaidi</td>
                        <td className='text-base text-[#3F3F44] '>01</td>
                        <td className='text-[#5679FF] text-base'> <span className='px-3 py-2 bg-gray-200 rounded-lg '>$100.5</span> </td>
                    </tr>
                    <tr className='border-b'>
                        <td><ServiceCard title={"Menicure"} dateString={"9 july,2022"} iconImage={MenicureIcon} /></td>
                        <td className='text-base text-[#3F3F44]'>Irtaza Zaidi</td>
                        <td className='text-base text-[#3F3F44] '>01</td>
                        <td className='text-[#5679FF] text-base'> <span className='px-3 py-2 bg-gray-200 rounded-lg '>$100.5</span> </td>
                    </tr>

                </tbody>
            </table>

        </div>
    )
}

export default AppointmentTable