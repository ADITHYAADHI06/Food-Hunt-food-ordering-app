import React from 'react'

const Contact = () => {
    return (
        <>
            <h1 className='text-4xl'>CONTACT US</h1>
            <form>
                <input type='text' name="name" placeholder='name' className='border border-black' />
                <input type='text' placeholder="msg" className='border border-black' />
                <button className='border border-black'>Submit</button>
            </form>
        </>
    )
}

export default Contact