import React, {useEffect} from 'react';

import NewsData from "./NewsData/NewsData";

const NewsDisplay = (props) => {
    const {state, setState} = props
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos/')
            .then(response => response.json())
            .then(json => console.log(json))




    }, []);
    return (
        <div className=' '>
        <NewsData state={state} setState={setState}/>
        </div>
    );
};

export default NewsDisplay;