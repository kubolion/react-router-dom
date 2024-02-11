import React from 'react';
import {KebabMenu} from "../IconNavItems";

const HeaderPost = () => {
    return (
        <div className='flex flex-row justify-between items-center'>
           <div className='flex flex-row gap-[10px]'>
               <img className='w-[40px] h-[40px] rounded-full ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG9pr9imIxIYtkasLO5K0XShV1ipYLS3WKYgyLtWk7jwKobonk0OrZFqe850gAsLa56Bw&usqp=CAU' alt='avatar'/>
               <div>
                   <p className='text-[18px] leading-[23.4px]'>Cook design</p>
                   <p className='text-[14px] leading-[18.2px] text-[#8A8A8A] '>16.11.2023, 19:28</p>
               </div>
           </div>
            <div>
                <KebabMenu/>
            </div>
        </div>
    );
};

export default HeaderPost;