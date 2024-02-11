import React from 'react';
import BlockWrapper from "../../BlockWrapper/BlockWrapper";

const UpdatesBlock = ({display = 'block' }) => {
    return (
        <div className={`${display} `}>
            <BlockWrapper>
                <div>
                    4
                </div>
            </BlockWrapper>
        </div>
    );
};

export default UpdatesBlock;