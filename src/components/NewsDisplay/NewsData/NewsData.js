import React from 'react';
import AllNewsBlock from "../AllNewsBlock/AllNewsBlock";
import LostFoundBlock from "../LostFoundBlock/LostFoundBlock";
import TopsNewsBlock from "../TopsNewsBlock/TopsNewsBlock";
import UpdatesBlock from "../UpdatesBlock/UpdatesBlock";

const NewsData = ({ state = 'flex', setState = 'none', data }) => {
    return (
        <div>
            <AllNewsBlock data={data} display={state === 0 ? 'block' : 'hidden'} state={state} setState={setState} index={0} />
            <LostFoundBlock display={state === 1 ? 'block' : 'hidden'} state={state} setState={setState} index={1} />
            <TopsNewsBlock display={state === 2 ? 'block' : 'hidden'} state={state} setState={setState} index={2} />
            <UpdatesBlock display={state === 3 ? 'block' : 'hidden'} state={state} setState={setState} index={3} />
        </div>
    );
};

export default NewsData;
