import React from 'react';
import {navItemsMain} from "../../config/navigationMainConfig";
import {Link} from "react-router-dom";

const MainNavigation = () => {
    return (
        <div className=' dody-aside--maim_list  '>
            <p className=' list-main  leading-[14.4px] text-[12px] text-[#8A8A8A] '>main</p>
            <ul className='flex flex-col '>
                {navItemsMain.map(item => <Link className='flex flex-row items-center gap-[8px] hover:text-white font-[400] text-[14px] px-[15px] py-[10px] rounded-[10px] hover:bg-[#FF855F] transition  stroke-[#161616] hover:stroke-[#FFF] ' key={item.id} to={item.href} >{item.icon} {item.title} </Link>)}
            </ul>
        </div>
    );
};

export default MainNavigation;