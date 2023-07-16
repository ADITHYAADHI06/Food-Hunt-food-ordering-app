const MenuCatogery = () => {
    const { name, description, imageId, isVeg, price } = recommendedMenu
    return (
        <>
            <div className='Main_menu_wrapper'>
                <div className='Menu_cards'>
                    <div className='left'>
                        <span className={isVeg ? 'icon veg' : 'icon nonVeg'}><IoMdRadioButtonOn /></span>
                        <h2>{name}</h2>
                        <h4>₹{price / 100}</h4>
                        <p>{description}</p>
                    </div>
                    <div className='right'>
                        {
                            imageId ? (<><img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + imageId} />
                                <button className='Cart_button'>+</button></>) : <button className='big_button'>+</button>
                        }

                    </div>
                </div>
                <hr />
            </div>
        </>)
}