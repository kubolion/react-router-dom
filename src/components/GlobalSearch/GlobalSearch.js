import React from 'react';
import {MagnifierIcon} from "../IconNavItems";

const GlobalSearch = () => {
    return (
        <div className='' >
            {/*<MagnifierIcon/>*/}
           <input className='py-[5px] px-[15px] rounded-[15px] ' type='text' placeholder='Global Search...'/>
        </div>
    );
};

export default GlobalSearch;