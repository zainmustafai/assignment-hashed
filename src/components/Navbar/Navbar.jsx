import React, { useState } from 'react'
import avatar from './avatar.png';
import SideNav from '../SideNav/SideNav';
const Navbar = () => {
    const [show, setShow] = useState(false);
    const dataPuller = (data) => {
        setShow(data);
    };

    return (
        <nav className='flex justify-between my-8'>
            {/* LEFT */}
            <button
                onClick={
                    () => setShow(!show)
                }
                className='relative'
            >

                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="31" viewBox="0 0 37 31" fill="none">
                    <rect width="36.5139" height="5.61752" fill="#101928" />
                    <rect y="12.6392" width="25.2788" height="5.61752" fill="#101928" />
                    <rect y="25.2788" width="36.5139" height="5.61752" fill="#101928" />
                </svg>
            </button>
            {
                show && <SideNav dataPuller={dataPuller} />
            }
            {/* RIGHT */}
            <section className='flex items-center gap-x-8'>
                <div className='flex items-center gap-4'>
                    <img width={'60px'} height={'60px'} className='rounded-full overflow-hidden' alt='avatar' src={avatar} />
                    <div className='hidden sm:block'>
                        <h2 className='font-bold text-dark text-[20px]'>Bella Famina</h2>
                        <p className='font-normal text-[18px] text-[#7B7B7B ] '>Joined 2 months ago</p>
                    </div>
                </div>
                <div className='gap-4 items-center hidden md:flex'>
                    {/* ICON */}
                    <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_23)">
                            <path d="M37.3471 40.082L35.6288 34.9262C35.0283 33.1263 33.4963 31.7976 31.6287 31.4577L26.6682 30.5551V30.1706C27.5315 29.6696 28.2826 28.9993 28.8809 28.2058H30.3795C31.6072 28.2058 32.6063 27.2068 32.6063 25.9791V17.072C32.6063 11.7515 28.2774 7.42261 22.9569 7.42261C17.6364 7.42261 13.3076 11.7515 13.3076 17.072V22.2678C13.3076 23.6988 14.3252 24.8961 15.6746 25.1752C16.091 27.3084 17.4241 29.1136 19.2456 30.1706V30.5551L14.2844 31.4577C12.4176 31.7976 10.8848 33.1263 10.2851 34.9262L9.9882 35.8177L7.46007 33.2896C7.17059 33.0001 7.17059 32.5287 7.46007 32.2393L10.392 29.3081L4.88889 23.805L1.57545 27.1184C0.594182 28.0997 0.0538177 29.4046 0.0538177 30.7926C0.0538177 32.1806 0.594182 33.4848 1.57545 34.466L11.6071 44.4977C12.5883 45.4789 13.8932 46.02 15.2812 46.02C16.6693 46.02 17.9734 45.4789 18.9317 44.5199L22.5472 41.2072L21.4197 40.082H37.3471ZM31.1218 25.9791C31.1218 26.3888 30.7885 26.7213 30.3795 26.7213H29.7553C29.9705 26.2307 30.1338 25.7133 30.2392 25.1752C30.5569 25.1091 30.8494 24.9829 31.1218 24.8241V25.9791ZM30.3795 23.5459V20.9896C30.8212 21.2472 31.1218 21.7207 31.1218 22.2678C31.1218 22.8148 30.8212 23.2884 30.3795 23.5459ZM15.5344 23.5459C15.0927 23.2884 14.7921 22.8148 14.7921 22.2678C14.7921 21.7207 15.0927 21.2472 15.5344 20.9896V23.5459ZM15.5344 18.5565V19.4041C15.2701 19.4732 15.0222 19.5771 14.7921 19.7114V17.072C14.7921 12.5702 18.4551 8.90712 22.9569 8.90712C27.4587 8.90712 31.1218 12.5702 31.1218 17.072V19.7114C30.8917 19.5771 30.6438 19.4724 30.3795 19.4041V18.5565H29.6373C27.4424 18.5565 25.3789 17.7014 23.8261 16.1493L22.9569 15.2802L22.0877 16.1493C20.5349 17.7014 18.4715 18.5565 16.2766 18.5565H15.5344ZM17.0189 23.7523V20.0128C19.2479 19.845 21.3262 18.9254 22.9569 17.3748C24.5877 18.9254 26.666 19.8458 28.895 20.0128V23.7523C28.895 24.8345 28.5996 25.8469 28.0919 26.7213H22.9569V28.2058H26.8716C25.825 29.127 24.457 29.6903 22.9569 29.6903C19.6828 29.6903 17.0189 27.0264 17.0189 23.7523ZM25.1837 30.8327V30.8676L22.9569 33.0943L20.7302 30.8676V30.8327C21.4338 31.0539 22.1813 31.1749 22.9569 31.1749C23.7326 31.1749 24.48 31.0539 25.1837 30.8327ZM11.6924 35.3953C12.1207 34.1098 13.2155 33.1604 14.5494 32.9169L19.7378 31.9743L22.9569 35.1935L26.1754 31.975L31.363 32.9177C32.6968 33.1611 33.7917 34.1098 34.22 35.3961L35.2881 38.5974H19.9352L17.0441 35.7064L13.8316 38.6123C13.5518 38.8936 13.0626 38.8936 12.7821 38.6123L11.161 36.9912L11.6924 35.3953ZM4.88814 25.9041L8.29214 29.3081L7.48605 30.1142L4.08205 26.7102L4.88814 25.9041ZM17.9036 43.4496C17.2029 44.1488 16.2707 44.5355 15.2798 44.5355C14.2888 44.5355 13.3566 44.1488 12.6551 43.4481L2.62351 33.4172C1.92282 32.7165 1.53685 31.7843 1.53685 30.7933C1.53685 29.8017 1.92282 28.8694 2.62351 28.1687L3.03176 27.7605L6.43575 31.1645L6.40903 31.1912C5.54133 32.0596 5.54133 33.4722 6.40903 34.3406L11.7318 39.6633C12.1526 40.0834 12.7115 40.3158 13.3068 40.3158C13.9021 40.3158 14.461 40.0842 14.8544 39.6893L14.9101 39.6396L18.3297 43.0592L17.9036 43.4496ZM19.4253 42.0541L16.0131 38.642L16.9936 37.7557L20.3999 41.1619L19.4253 42.0541Z" fill="#3F3F44" />
                            <path d="M43.7402 0H33.3485C32.1208 0 31.1218 0.999079 31.1218 2.22677V8.16484C31.1218 9.39253 32.1208 10.3916 33.3485 10.3916H35.3311L34.5636 14.8682L41.7264 10.3916H43.7402C44.9678 10.3916 45.9669 9.39253 45.9669 8.16484V2.22677C45.9669 0.999079 44.9678 0 43.7402 0ZM44.4824 8.16484C44.4824 8.57382 44.1491 8.9071 43.7402 8.9071H41.3003L36.5863 11.8531L37.0917 8.9071H33.3485C32.9396 8.9071 32.6063 8.57382 32.6063 8.16484V2.22677C32.6063 1.81779 32.9396 1.48452 33.3485 1.48452H43.7402C44.1491 1.48452 44.4824 1.81779 44.4824 2.22677V8.16484Z" fill="#3F3F44" />
                            <path d="M42.9979 2.96899H34.0908V4.45351H42.9979V2.96899Z" fill="#3F3F44" />
                            <path d="M40.0289 5.93811H34.0908V7.42263H40.0289V5.93811Z" fill="#3F3F44" />
                            <path d="M42.9979 5.93811H41.5134V7.42263H42.9979V5.93811Z" fill="#3F3F44" />
                            <path d="M22.9569 2.22681C13.2586 2.22681 4.90447 8.93534 2.73262 18.293L1.32604 15.9482L0.0530701 16.712L2.66211 21.0594L7.00951 18.4503L6.24573 17.1774L4.23421 18.3843C6.33777 9.82382 14.0357 3.71132 22.9569 3.71132C24.9068 3.71132 26.8308 4.0008 28.6753 4.57234L29.1147 3.15463C27.1277 2.53856 25.056 2.22681 22.9569 2.22681Z" fill="#3F3F44" />
                            <path d="M45.6062 16.4351L41.2588 13.826L38.6505 18.1742L39.9235 18.938L41.2224 16.7728C41.906 18.7732 42.2556 20.8656 42.2556 23.01C42.2556 27.4242 40.7266 31.7397 37.9513 35.1608L39.104 36.096C42.0938 32.4114 43.7402 27.7634 43.7402 23.01C43.7402 20.7394 43.3742 18.5223 42.6609 16.3995L44.8424 17.7081L45.6062 16.4351Z" fill="#3F3F44" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_23">
                                <rect width="46.02" height="46.02" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    {/* BELL ICON */}
                    <div className='relative'>
                        <svg
                            className='absolute top-0 right-0 '
                            xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                            {/* PING */}
                            <circle cx="7.37934" cy="7.39084" r="7.08041" fill="#5679FF" />
                        </svg>
                        <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_19)">
                                <path d="M35.9195 30.862H39.4598V34.4022H4.05769V30.862H7.5979V18.4712C7.5979 14.7156 9.08984 11.1137 11.7455 8.45803C14.4012 5.80236 18.003 4.31042 21.7587 4.31042C25.5144 4.31042 29.1163 5.80236 31.7719 8.45803C34.4276 11.1137 35.9195 14.7156 35.9195 18.4712V30.862ZM32.3793 30.862V18.4712C32.3793 15.6545 31.2604 12.9531 29.2686 10.9613C27.2769 8.96959 24.5755 7.85063 21.7587 7.85063C18.942 7.85063 16.2406 8.96959 14.2488 10.9613C12.2571 12.9531 11.1381 15.6545 11.1381 18.4712V30.862H32.3793ZM16.4484 37.9424H27.069V41.4826H16.4484V37.9424Z" fill="#3F3F44" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_19">
                                    <rect width="42.4825" height="42.4825" fill="white" transform="translate(0.517532 0.770264)" />
                                </clipPath>
                            </defs>
                        </svg>

                    </div>


                </div>
            </section>
        </nav>

    )
}

export default Navbar