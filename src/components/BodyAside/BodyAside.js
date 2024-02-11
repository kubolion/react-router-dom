import React from 'react';
import AnimalServiceNavigation from "../AnimalServiceNavigation/AnimalServiceNavigation";
import MainNavigation from "../MainNavigation/MainNavigation";

const BodyAside = () => {
    return (
        <div className='flex flex-col leading-[18.2px] text-[18px] '>
            <MainNavigation/>
            <AnimalServiceNavigation/>


        </div>

    );
};

export default BodyAside;