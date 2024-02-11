import React from 'react';

const TabsButton = (props) => {
    const {title, icon, state, setState, index} = props
    return (
        <div onClick={()=>setState(index)} className={` ${state === index ? 'bg-[#FF855F] text-white ': "" } cursor-pointer w-[137.5px] justify-center rounded-[5px] p-[8px] flex flex-row items-center gap-[4px] transition `}>
            {icon}
            {title}
        </div>
    );
};

export default TabsButton;