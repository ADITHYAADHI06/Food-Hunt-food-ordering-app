import React, { useState } from 'react'
import Food from './Food';


const Restorent_Catogerys = ({ title, itemCards }) => {

    const [catogeryToggle, setCatogeryToggle] = useState(false);
    console.log(catogeryToggle);
    return (
        <>
            <h4 className='font-bold bg-grey-50 text-3xl  mb-5 mt-10' onClick={() => { setCatogeryToggle((prevState) => { return !prevState; }) }}>{title}</h4>
            {
                catogeryToggle ?
                    itemCards.map((c, i) => <Food info={c?.card?.info} key={i} />) : <div></div>
            }
            <hr className='border-8 border-gray-200' />
        </>
    )
}

export default Restorent_Catogerys