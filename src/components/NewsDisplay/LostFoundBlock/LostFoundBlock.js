import React from 'react';
import BlockWrapper from "../../BlockWrapper/BlockWrapper";

const LostFoundBlock = ({display = 'block' }) => {
    return (
        <div className={`${display} `}>
            <BlockWrapper>
                <div>
                2
                </div>
            </BlockWrapper>
        </div>
    );
};

export default LostFoundBlock;