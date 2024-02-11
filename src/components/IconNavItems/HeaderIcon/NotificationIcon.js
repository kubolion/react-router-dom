import React from 'react';

const NotificationIcon = () => {
    return (
        <div className='p-[5px] bg-white rounded-full relative '>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14.8572 19.4286C14.0953 20.5714 13.1429 21.1429 12.0001 21.1429C10.8572 21.1429 9.90482 20.5714 9.14291 19.4286M17.8109 17.7143H6.18917C5.14727 17.7143 4.30264 16.8697 4.30264 15.8278C4.30264 15.4858 4.39557 15.1503 4.57148 14.8571C5.69322 12.9876 6.28577 10.8483 6.28577 8.66802V7.42857C6.28577 4.90384 8.33247 2.85714 10.8572 2.85714H13.1429C15.6676 2.85714 17.7143 4.90384 17.7143 7.42857V8.66802C17.7143 10.8483 18.3069 12.9876 19.4286 14.8571C19.9647 15.7506 19.675 16.9094 18.7816 17.4454C18.4884 17.6214 18.1529 17.7143 17.8109 17.7143Z"
                    stroke="#FF855F" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
           <div className='absolute top-0 right-0 w-[10px] h-[10px] bg-[#FF855F] rounded-full ' ></div>
        </div>
    );
};

export default NotificationIcon;