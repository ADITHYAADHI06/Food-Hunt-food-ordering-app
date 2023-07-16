import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Restaurant_card = ({ restaurant }) => {

    const { id, name, cuisines, avgRating, deliveryTime, costForTwoString } = restaurant;

    const Restaurant_card__wrapper = styled.div`
    width: 260px;
    height: auto;
    box-shadow: ${({ theme }) => theme.colors.res_card__shadow};
    margin: 15px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);
}

.res__card__img {
    width: 100%;
    height: 16rem;
    object-fit: cover;
    border-radius: 4px 4px 0 0;
}

.res__info {
    padding: 1rem 2rem 1rem 2rem;
    line-height: 1.6rem;
}

.res__info h2 {
    padding-bottom: 0.5rem;
    font-size: 1.5rem;
    color: #333333;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.res__info h4 {
    color: #555555;
    font-size: 1rem;
    font-weight: 500;
}

.res__info h4.res__cuisines {
    font-size: 0.875rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 1.7rem;
}

.res__card__bottom {
    display: flex;
    justify-content: space-between;
}
    `

    return (
        <Link to={"/restaurantMenu/" + id}>
            <Restaurant_card__wrapper>
                <div className="res__card__img">
                    <img
                        src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + restaurant.cloudinaryImageId}
                        className="res__card__img"
                        alt="restaurant"
                    />
                </div>
                <div className="res__info">
                    <h2>{name}</h2>
                    <h4 className="res__cuisines">{cuisines.join(", ")}</h4>
                    <div className="res__card__bottom">
                        <h4>⭐️ {avgRating}</h4>
                        <span>•</span>
                        <h4>{deliveryTime} MINS</h4>
                        <span>•</span>
                        <h4>{costForTwoString}</h4>
                    </div>
                </div>
            </Restaurant_card__wrapper>
        </Link>
    )
}

export const WithPromoted = (Restaurant_card) => {
    return (props) => {
        return (
            <div className='relative'>
                <span className='absolute left-8 px-3 py-1 rounded-md top-10 text-white bg-black'>Promoted</span>
                <Restaurant_card {...props} />
            </div>
        )

    }
}


export default Restaurant_card