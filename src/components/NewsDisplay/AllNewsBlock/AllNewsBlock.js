// AllNewsBlock.jsx
import React from 'react';
import BlockWrapper from "../../BlockWrapper/BlockWrapper";

const AllNewsBlock = ({ display = 'block', data }) => {
    return (
        <div className='flex flex-col gap-[25px]'>
            {data && data.map((item) => (
                <div key={item.id} className={`${display} `}>
                    <BlockWrapper>
                        <div>
                            <p>{item.title}</p>
                        </div>
                        <div className='flex gap-[10px] '>
                            <img className='max-w-[280px] rounded-[10px] ' src={item.url} alt="картинка поста" />
                            <img className='max-w-[280px] rounded-[10px] ' src={item.url} alt="картинка поста" />
                        </div>
                    </BlockWrapper>
                </div>
            ))}
        </div>
    );
};

export default AllNewsBlock;
