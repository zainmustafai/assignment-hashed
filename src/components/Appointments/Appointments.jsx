import AppointmentCard from "./AppointmentCard"
import Calendar from "./Calendar"

import MenicureIcon from './MenicureIcon.png'
import HairDyeIcon from './HairDyeIcon.png'
import { List, Paper } from "@mui/material"

const Appointments = () => {
    return (
        <section className=' my-8 grid grid-cols-1 md:grid-cols-2 gap-11 min-h-[450px]'>
            {/* CALENDAR SIDE */}
            <div className="bg-[#F9F9F9] rounded-lg p-10">
                <Calendar />
            </div>
            {/* APPOINTMENTS SIDE */}
            <div>
                <h1 className="text-[#3F3F44] text-lg font-semibold mb-7 ">Today's Appointments</h1>
                <List style={{
                    maxHeight: 400,
                    overflow: 'auto'
                }}>
                    <AppointmentCard title={"Menicure"} iconImage={MenicureIcon} />
                    <AppointmentCard title={"Hair Dye"} iconImage={HairDyeIcon} />
                    <AppointmentCard title={"Menicure"} iconImage={MenicureIcon} />
                    <AppointmentCard title={"Menicure"} iconImage={MenicureIcon} />
                    <AppointmentCard title={"Menicure"} iconImage={MenicureIcon} />
                    <AppointmentCard title={"Menicure"} iconImage={MenicureIcon} />
                    <AppointmentCard title={"Menicure"} iconImage={MenicureIcon} />
                    <AppointmentCard title={"Menicure"} iconImage={MenicureIcon} />
                    <AppointmentCard title={"Menicure"} iconImage={MenicureIcon} />
                    <AppointmentCard title={"Menicure"} iconImage={MenicureIcon} />
                </List>

                {/* CHEVRON  */}
                <div className="text-center w-full flex items-center justify-center  relative">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                            <g clip-path="url(#clip0_1_478)">
                                <path d="M29.7082 21.9583L24.1631 27.5034L18.618 21.9583L16.7916 23.7847L24.1631 31.1562L31.5346 23.7847L29.7082 21.9583Z" fill="#52BDCB" />
                                <path d="M29.7083 12.9167L24.1632 18.4618L18.6181 12.9167L16.7917 14.7431L24.1632 22.1146L31.5347 14.7431L29.7083 12.9167Z" fill="#52BDCB" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_478">
                                    <rect width="31" height="31" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
            </div>


        </section>
    )
}

export default Appointments