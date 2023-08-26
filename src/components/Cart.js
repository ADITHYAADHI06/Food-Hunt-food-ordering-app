import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Food from '../sub__components/Food';
import { clearCart } from '../redux/cartSlice';

const Cart = () => {

    const Items = useSelector((store) => store.cart.CartItems)
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <>
            <h1 className='text-center text-6xl mt-24'>CART</h1>
            <div className='w-8/12 mx-auto m-3  mt-16 p-3 border-black border-zinc-950 '>
                <button onClick={handleClearCart} className='bg-black py-4 px-3 rounded-md text-white'>Clear Cart</button>
                {Items.length === 0 ? <h1>add some items in to cart</h1> :
                    Items.map((c, i) => {
                        return (
                            <Food info={c} key={i} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Cart