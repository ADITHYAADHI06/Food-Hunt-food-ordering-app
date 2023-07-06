import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// import restaurantData from "../Utils/restaurant_data"
import Restaurant_card from '../sub__components/Restaurant_card'
import Shimmer from './Shimmer'
import useOnlineStatus from '../Utils/useOnlineStatus'

const Body__wrapper = styled.main` 
       padding: 9rem 15rem;
       /* display:flex; */
       /* justify-content:center; */
       /* align-items:center; */
       background-color: #fff;
       .res_container{
              max-width:120rem      
       }
       .Filter_conatiner{
        width: 100%;
        padding: 0 3.2rem 0 1.6rem;
           display:flex;
           justify-content:space-between;
           align-items:center;

       }
       .grid{
        gap:2rem;
       }   

        `
const Body = () => {

    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [filtered_Restaurants, setfiltered_Restaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    const onlineStatus = useOnlineStatus();

    function filterTopRated() {
        const temp_ListOfRestaurants = listOfRestaurants.filter((curElem) => curElem.avgRating > 4)
        setfiltered_Restaurants(temp_ListOfRestaurants);
    }
    const allData = () => {
        console.log("called");
        setfiltered_Restaurants(listOfRestaurants);
    }

    function fillerSearch(e) {
        setSearchText(e.target.value);

        const temp_ListOfRestaurants = listOfRestaurants.filter(curElem => curElem.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setfiltered_Restaurants(temp_ListOfRestaurants);
    }



    const fecthData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9577549&lng=77.5992505&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING")
            const dataJson = await data.json();
            // console.log(dataJson.data.cards);
            Resto_data = dataJson?.data?.cards.map((cur, i) => {
                return cur?.data?.data;
            })
            // console.log(sortedData);
            setlistOfRestaurants(Resto_data);
            setfiltered_Restaurants(Resto_data);
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        // console.log("useEffect called after body render");
        fecthData();
    }, []);




    if (!onlineStatus) {
        return <h1>your offline!.... please check yout connection.</h1>
    }

    if (listOfRestaurants.length === 0) {
        return <Shimmer />
    }
    return (
        <Body__wrapper>
            <div className='Filter_conatiner'>
                <div className='left'>
                    <button className='filter-btn' onClick={filterTopRated} >Top rated restaurant</button>
                    <button className='filter-btn' onClick={allData} >Relevance</button>
                </div>
                <div className='right'>
                    <input type="text" className='search_Bar' value={searchText} onChange={(e) => { fillerSearch(e) }} />
                </div>
            </div>
            {
                filtered_Restaurants.length === 0 ? (<Shimmer />) : (<div className='grid grid-four-column res_container'>
                    {
                        filtered_Restaurants.map((restaurant) => <Restaurant_card key={restaurant.id} restaurant={restaurant} />)
                    }
                </div>)
            }

        </Body__wrapper>
    )
}

export default Body
