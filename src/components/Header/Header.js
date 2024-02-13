import React from 'react';
import GlobalSearch from "../GlobalSearch/GlobalSearch";
import {CatInBox, NotificationIcon, PawIcon} from "../IconNavItems";
import Logo from "../Logo/Logo";
const Header = () => {

    return (
<header>
    <div className= ' bg-cover bg-center w-[100%]  h-[200px] header-bg ' >
        <div className='w-[1200px] mx-auto flex flex-row justify-between '>
            <div className=' w-[240px] px-[15px] py-[20px]' >
                <Logo/>
            </div>
            <div className=' w-[590px] flex justify-start gap-[15px] items-center'>
                <NotificationIcon/>
                <GlobalSearch/>
            </div>
            <div className='w-[330px] flex justify-between  items-center '>
                <button className='py-[12px] pl-[16px] pr-[24px] rounded-[10px]  text-white border-[1px] flex gap-[8px] '>{<PawIcon/>} <p className='text-inherit' >I found a Pet</p> </button>
                <button className='py-[12px] pl-[16px] pr-[24px] rounded-[10px] bg-[#FF855F] text-white flex gap-[8px]  '>{<CatInBox/>} <p className='text-inherit'>I lost a Pet</p> </button>
            </div>
        </div>
        pfdf
    </div>
</header>

    );
};

export default Header;