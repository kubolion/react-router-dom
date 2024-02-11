import React from 'react';
import BlockWrapper from "../../BlockWrapper/BlockWrapper";

const AllNewsBlock = ({display = 'block' }) => {
    return (
        <div className={`${display} `}>
        <BlockWrapper>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eaque eos fugiat, illum ipsa maxime numquam porro quas quos reprehenderit sit ullam, veniam! A deserunt nemo nesciunt officiis quis quisquam!</p>
            </div>
            <div>
                <img src="" alt="картинка поста"/>
            </div>
        </BlockWrapper>
        </div>
    );
};

export default AllNewsBlock;