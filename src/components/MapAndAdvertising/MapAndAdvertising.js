import React from 'react';
import MiniMap from "./MiniMap/MiniMap";
import Advesting from "./Advesting/Advesting";

const MapAndAdvertising = () => {
    return (
        <div className='flex flex-col gap-[15px]'>
            <MiniMap/>
            <Advesting/>
        </div>
    );
};

export default MapAndAdvertising;