import React, { useState } from 'react';
import { CommentsIcon, LikeIcon, RepostIcon } from "../IconNavItems";

const LikeWrap = () => {
    const [likeCounter, setLikeCounter] = useState(0);
    const [commentsCounter, setCommentsCounter] = useState(0);
    const [repostCounter, setRepostCounter] = useState(0);
    const [isColorSet, setIsColorSet] = useState(false)
    const handleLikeClick = () => {
        setLikeCounter(prevCounter => prevCounter % 2 === 0 ? prevCounter + 1 : prevCounter - 1);
    };

    const handleCommentsClick = () => {
        setCommentsCounter(prevCounter => prevCounter % 2 === 0 ? prevCounter + 1 : prevCounter - 1);
    };

    const handleRepostClick = () => {
        setRepostCounter(prevCounter => prevCounter % 2 === 0 ? prevCounter + 1 : prevCounter - 1);
    };
    const setColor = () => {
        setIsColorSet(prevState => !prevState);
    };

    return (
        <div>
            <div className='flex gap-[16px] text-[14px] select-none '>
                <div onClick={setColor} className={isColorSet ? 'bg-[#FF7171] text-white stroke-white py-1 px-2 rounded-[90px] ' : ' text-[#8A8A8A] stroke-[#8A8A8A] py-1 px-2 rounded-[90px] '  } >
                <div  onClick={handleLikeClick } className='flex  gap-[4px] items-center text-inherit stroke-inherit cursor-pointer'>
                    <LikeIcon />
                    <p className=' text-inherit'>{999 + likeCounter}</p>
                </div>
                </div>
                <div onClick={handleCommentsClick} className='flex gap-[4px] items-center cursor-pointer'>
                    <CommentsIcon />
                    <p className='text-[#8A8A8A]'>{554 + commentsCounter}</p>
                </div>
                <div onClick={handleRepostClick} className='flex gap-[4px] items-center cursor-pointer'>
                    <RepostIcon />
                    <p className='text-[#8A8A8A]'>{98 + repostCounter}</p>
                </div>
            </div>
        </div>
    );
};

export default LikeWrap;