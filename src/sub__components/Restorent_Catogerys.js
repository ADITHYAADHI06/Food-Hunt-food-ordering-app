import React, { useState } from 'react'
import Food from './Food';

import { MdKeyboardArrowUp } from "react-icons/md"
import { MdKeyboardArrowDown } from "react-icons/md"



const Restorent_Catogerys = ({ title, itemCards, ShowItemCard, setShowItemCardindex }) => {
    const [local, setlocal] = useState(ShowItemCard);


    return (
        <>
            <div className='font-bold bg-grey-50 text-2xl  mb-5 mt-10 flex justify-between' onClick={local ? () => { setlocal(!local); } : () => { setShowItemCardindex(); setlocal(true) }}> <p>{title}</p> <p className="text-4xl">{ShowItemCard && local ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />} </p></div>
            {
                ShowItemCard && local ?
                    itemCards.map((c, i) => <Food info={c?.card?.info} key={i} />) : <></>
            }
            <hr className='border-8 border-gray-200' />
        </>
    )
}

export default Restorent_Catogerys