import React from 'react'
import { IoMdRadioButtonOn } from "react-icons/io"
import { useDispatch } from 'react-redux';
import { addItem } from "../redux/cartSlice"


const Food = ({ info }) => {
    const { isVeg, name, price, description, imageId, defaultPrice, isBestseller, inStock, variantsV2, addons } = info;

    const { variantGroups, pricingModels } = variantsV2
    let regularPrice = pricingModels ? pricingModels[0]?.price : 0;

    const dispatch = useDispatch();

    const handleAddItem = () => {
        dispatch(addItem(info))
    }

    return (
        <div className=''>
            <div className='flex justify-between gap-5'>
                <div className=''>
                    <p><IoMdRadioButtonOn className={isVeg ? 'text-3xl text-green-400 mb-2 inline-block' : 'text-3xl text-red-600 mb-2 inline-block'} /><span className='ml-2 text-orange-400 font-semibold'>{isBestseller ? "BEST SELLER" : ""} </span></p>
                    <h2 className='text-2xl mb-2 font-bold'>{name}</h2>
                    <h4 className='text-xl mb-4 font-semibold'>{price ? ` ₹${price / 100}` : ` ₹${defaultPrice / 100} `}</h4>
                    <p className='text-md text-gray-500'>{description}</p>
                </div>
                <div className='w-48 h-36  relative'>
                    {
                        imageId ? (
                            <>
                                <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + imageId} className='w-full h-full ' />
                                <div className={variantGroups || addons ? " absolute -bottom-16 left-4 " : 'absolute -bottom-10 left-4'}>
                                    <button onClick={() => { handleAddItem(info) }} className=' px-14 pt-3 pb-4 rounded-md  border-2 border-black   text-green-500 font-semibold text-xl bg-white'>ADD</button>
                                    {variantGroups || addons ? <p className='text-center'>Customizable</p> : <></>}
                                </div>
                            </>)
                            : <button className='big_button'>+</button>
                    }


                </div>
            </div>
            <hr className='mb-6 mt-20' />
        </div>

    )
}

export default Food

