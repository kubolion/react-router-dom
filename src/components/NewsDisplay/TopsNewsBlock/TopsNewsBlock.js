import React from 'react';
import BlockWrapper from "../../BlockWrapper/BlockWrapper";

const TopsNewsBlock = ({display = 'block' }) => {
    return (
        <div className={`${display} `}>
            <BlockWrapper>
                <div>
                    3
                </div>
            </BlockWrapper>
        </div>
    );
};

export default TopsNewsBlock;