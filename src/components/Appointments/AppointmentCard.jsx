
const AppointmentCard = ({title,iconImage}
) => {
    return (
        <div className='flex justify-between items-center bg-dark mb-3 rounded-2xl p-[18px] text-white font-sans'>
            {/* Appointment Section */}
            <section className='flex items-center gap-x-4'>
                {/* ICON CONTAINER */}
                <div
                    className='relative rounded-md overflow-hidden w-[72px] aspect-square bg-[#FFEEF4]'
                >
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
                <div className=''>
                    <p className="text-[14px] font-light">10:30 AM - 11:00 AM</p>
                    <h2 className="text-[16px] font-medium">Menicure</h2>
                    <p className="flex items-center gap-x-1">
                        {/* USER ICON SVG */}
                        <svg
                            className='inline-block'
                            width="15" height="15"
                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g>
                        </svg>
                        <span className="text-[14px] font-light">Fabiha Arshad</span>
                    </p>
                </div>
            </section>


            {/* Date Section */}
            <section className="text-center pr-4">
                <h2 className="font-medium text-[36px]">13</h2>
                <p className="text-[14px] font-light">July</p>
            </section>

        </div>
    )
}

export default AppointmentCard