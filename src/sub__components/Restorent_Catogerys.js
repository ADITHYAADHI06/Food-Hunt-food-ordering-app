import React, { useState } from 'react'
import Food from './Food';


const Restorent_Catogerys = ({ title, itemCards, ShowItemCard, setShowItemCardindex }) => {

    return (
        <>
            <h4 className='font-bold bg-grey-50 text-3xl  mb-5 mt-10' onClick={() => { setShowItemCardindex(); }}>{title}</h4>
            {
                ShowItemCard ?
                    itemCards.map((c, i) => <Food info={c?.card?.info} key={i} />) : <></>
            }
            <hr className='border-8 border-gray-200' />
        </>
    )
}

export default Restorent_Catogerys