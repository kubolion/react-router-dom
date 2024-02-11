import React from 'react';
import GearModal from "../GearModal/GearModal";


const HeaderAside = ({userInfo}) => {
    return (
        <div className='min-w-[220px] flex flex-col  '>

                <div className='flex justify-between px-[5px] py-[10px] relative'>
                    <p className='text-[12px] text-[#8A8A8A]  leading-[14.4px] '>My account</p>
                    <GearModal/>
                </div>
            <div className='flex flex-row gap-[10px]  py-[10px] '>
                <div className='relative  '>
                <img src={userInfo.photo} alt='avatar' className='w-[40px] h-[40px]' />
                <div className='w-[15px] h-[15px] bg-[#FF855F] rounded-full absolute right-0 bottom-0 ' ></div>
                </div>
                <div className='flex flex-col gap-[5px] text-[12px] '>
                        <p className='text-[14px] leading-[18.2px] '>{userInfo.firstName} {userInfo.lastName}</p>
                        <p className='text-[#8A8A8A] leading-[14.4px] ' >{userInfo.role}</p>
                </div>
            </div>
            <hr className='h-[1px] bg-[#DCDCDC] my-[10px] '/>

        </div>





    );
};

export default HeaderAside;

