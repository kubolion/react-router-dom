import React from 'react';

const CreatePostAndArticle = () => {
    return (
        <div className='  max-w-[590px] min-w-[590px] shadow-md rounded-[15px] bg-white '>
        <form className=' p-[16px] flex flex-col gap-[16px] '>

            <div className='flex flex-row gap-[16px]'>
                <button className='pr-[16px] pl-[12px] py-[8px] rounded-[10px]'>New Post</button>
                <button className='pr-[16px] pl-[12px] py-[8px] rounded-[10px]'>New Article</button>
            </div>
            <div>
                <textarea className='p-[10px] w-[100%] min-h-[80px] border rounded-[10px] ' placeholder='What’s on your mind?'></textarea>
            </div>
            <div className='flex flex-row justify-between'>
                <div className='flex gap-[16px]'>
                    <p>vid</p>
                    <p>gal</p>
                    <p>pht</p>
                    <p>shr</p>
                </div>
                <div>
                <button className='px-[16px] py-[8px] rounded-[6px] bg-[#FF855F] text-white '>Publish</button>
                </div>
            </div>


        </form>
        </div>
    );
};

export default CreatePostAndArticle;