import React from 'react';
import HeaderPost from "../HeaderPost/HeaderPost";
import LikeWrap from "../LikeWrap/LikeWrap";

const BlockWrapper = ({children}) => {
    return (
        <div className=' flex flex-col gap-[15px] p-[10px] bg-white rounded-[15px] shadow-md'>
            <HeaderPost/>
            {children}
            <LikeWrap/>
        </div>
    );
};

export default BlockWrapper;