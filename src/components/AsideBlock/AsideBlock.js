import React from 'react';
import HeaderAside from "../HeaderAside/HeaderAside";
import BodyAside from "../BodyAside/BodyAside";


const AsideBlock = (props) => {
    const {user} = props
    return (
        <div className='  border p-[10px] rounded-[15px] shadow-md h-fit bg-white '>
            <HeaderAside userInfo={user}/>
            <BodyAside/>
        </div>
    );
};

export default AsideBlock;