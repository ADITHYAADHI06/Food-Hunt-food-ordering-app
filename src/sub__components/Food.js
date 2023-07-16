import React from 'react'
import { IoMdRadioButtonOn } from "react-icons/io"


const Food = ({ info }) => {
    const { isVeg, name, price, description, imageId, inStock, variantsV2 } = info;

    const { variantGroups, pricingModels } = variantsV2
    let regularPrice = pricingModels ? pricingModels[0]?.price : 0;
    return (
        <div className=''>
            <div className='flex justify-between'>
                <div className=''>
                    <span className={isVeg ? 'text-3xl text-green-400' : 'text-3xl text-red-600'}><IoMdRadioButtonOn /></span>
                    <h2 className='text-2xl font-bold'>{name}</h2>
                    <h4 className='text-xl font-semibold'>{price ? ` ₹${price / 100}` : ` ₹${regularPrice / 100} `}</h4>
                    <p className='text-sm'>{description}</p>
                </div>
                <div className='w-48 relative'>
                    {
                        imageId ? (
                            <>
                                <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + imageId} />
                                <button className='Cart_button absolute px-4 py-2 rounded-md -bottom-2.5 border-2 border-black  left-20 bg-white'>+</button>
                            </>)
                            : <button className='big_button'>+</button>
                    }

                </div>
            </div>
            <hr className='mb-6 mt-6' />
        </div>

        // <div className='bg-black m-2 text-white flex justify-between gap-4'>
        //     <div className='content_side'>{info.name}</div>
        //     <div className='img_side w-10'>
        //         <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png" alt='img' />
        //     </div>
        // </div>
    )
}

export default Food

