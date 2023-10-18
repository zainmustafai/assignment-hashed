
const Header = () => {
    return (
        <header className='flex justify-between items-center py-8 flex-wrap '>
            <p className='text-dark text-[29px] drop-shadow-lg'> Good Morning, <span className='font-semibold'>Bella Famina</span></p>
            <button className='flex items-center gap-x-4 px-4 py-2 rounded-lg min-w-[260px] min-h-[60px] bg-dark text-white font-semibold'>
                <span>
                {/* CALENDAR ICON */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <g clip-path="url(#clip0_1_49)">
                            <path d="M20.8749 4.12498H25.7082C26.0287 4.12498 26.3361 4.25229 26.5627 4.47889C26.7893 4.7055 26.9166 5.01284 26.9166 5.33331V24.6666C26.9166 24.9871 26.7893 25.2945 26.5627 25.5211C26.3361 25.7477 26.0287 25.875 25.7082 25.875H3.95824C3.63777 25.875 3.33043 25.7477 3.10382 25.5211C2.87721 25.2945 2.74991 24.9871 2.74991 24.6666V5.33331C2.74991 5.01284 2.87721 4.7055 3.10382 4.47889C3.33043 4.25229 3.63777 4.12498 3.95824 4.12498H8.79157V1.70831H11.2082V4.12498H18.4582V1.70831H20.8749V4.12498ZM24.4999 13.7916H5.16657V23.4583H24.4999V13.7916ZM18.4582 6.54165H11.2082V8.95831H8.79157V6.54165H5.16657V11.375H24.4999V6.54165H20.8749V8.95831H18.4582V6.54165ZM7.58324 16.2083H9.99991V18.625H7.58324V16.2083ZM13.6249 16.2083H16.0416V18.625H13.6249V16.2083ZM19.6666 16.2083H22.0832V18.625H19.6666V16.2083Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_49">
                                <rect width="29" height="29" fill="white" transform="translate(0.333252 0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                </span>
                <span className='font-semibold text-[20px] font-sans'>New Appointment</span>
            </button>
        </header>
    )
}

export default Header