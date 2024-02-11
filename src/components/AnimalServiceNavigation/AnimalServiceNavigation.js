import React from 'react';
import { navItemsServices} from "../../config/navigationMainConfig";
import {Link} from "react-router-dom";

const AnimalServiceNavigation = () => {
    return (
        <div className='dody-aside--maim_list'>
            <p className=' list-main  leading-[14.4px] text-[12px] text-[#8A8A8A] '>Animal Services</p>
            <ul className='flex flex-col '>
                {navItemsServices.map(item => <Link
                    className='flex flex-row items-center gap-[8px] hover:text-white font-[400] text-[14px] px-[15px] py-[10px] rounded-[10px] hover:bg-[#FF855F] transition  stroke-[#161616] hover:stroke-[#FFF] '
                    to={item.href} key={item.id}>{item.icon} {item.title} </Link>)}
            </ul>
        </div>

    );
};

export default AnimalServiceNavigation;