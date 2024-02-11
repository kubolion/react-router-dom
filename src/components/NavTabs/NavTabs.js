import React from 'react';
import TabsButton from "../TabsButton/TabsButton";
import {AllNews, LostFoundIcon, TopNewsIcon, UpdatesIcon} from "../IconNavItems";

const NavTabs = (props) => {
    const {state, setState} = props
    return (
        <div className=' flex flex-row bg-white p-[5px] rounded-[10px] gap-[10px]  '>
            <TabsButton title='All News' icon={<AllNews color={state === 0 ? 'white': 'black'} />} state={state}  setState={setState}  index={0}/>
            <TabsButton title='Lost & Found' icon={<LostFoundIcon color={state === 1 ? 'white': 'black'} />} state={state}  setState={setState} index={1}/>
            <TabsButton title='Top News ' icon={<TopNewsIcon color={state === 2 ? 'white': 'black'} />} state={state} setState={setState}  index={2}/>
            <TabsButton title='Updates' icon={<UpdatesIcon color={state === 3 ? 'white': 'black'} />} state={state} setState={setState} index={3}/>
        </div>
    );
};

export default NavTabs;