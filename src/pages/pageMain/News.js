import React, {useState} from 'react';
import NavTabs from "../../components/NavTabs/NavTabs";
import NewsDisplay from "../../components/NewsDisplay/NewsDisplay";

const News = () => {
    const[state, setState] = useState(0)
    return (
        <div className=' flex flex-col gap-[15px]'>
            <NavTabs state={state} setState={setState}/>
            <NewsDisplay state={state} setState={setState} />
        </div>
    );
};

export default News;