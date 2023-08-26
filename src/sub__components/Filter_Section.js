import React, { useContext, useState } from 'react'
import userContext from '../Utils/context/UserContext';

const Filter_Section = ({ setfiltered_Restaurants, listOfRestaurants }) => {
    const [searchText, setSearchText] = useState("");
    const [pop, setPop] = useState(false);

    function filterTopRated() {
        const temp_ListOfRestaurants = listOfRestaurants.filter((curElem) => curElem.avgRating > 4)
        setfiltered_Restaurants(temp_ListOfRestaurants);
    }

    const allData = () => {
        setfiltered_Restaurants(listOfRestaurants);
    }

    function fillerSearch(e) {
        setSearchText(e.target.value);
        const temp_ListOfRestaurants = listOfRestaurants.filter(curElem => curElem.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setfiltered_Restaurants(temp_ListOfRestaurants);
    }

    let data = useContext(userContext);
    return (
        <>
            <div className='Filter_conatiner'>
                <input type='text' className='border border-black' onChange={(e) => { data.setUserName(e.target.value) }} value={data.user} />
                <div>
                    <button onClick={() => { setPop(!pop) }} className=' text-4xl px-7 py-4  shadow-lg rounded-3xl border-s-2'>Fillter</button>
                </div>
                {pop === true ?
                    (<div className='absolute w-full h-full bg-black'>
                        <div className='w-64 h-52 bg-white '>hi</div>
                    </div>) : <></>
                }



                {/* <div className='left'>
                    <button className='filter-btn bg-orange-300 rounded-lg px-3 text-white py-2 ' onClick={filterTopRated} >Top rated restaurant</button>
                    <button className='filter-btn' onClick={allData} >Relevance</button>
                </div>
                <div className='right'>
                    <input type="text" className='search_Bar' value={searchText} onChange={(e) => { fillerSearch(e) }} />
                </div> */}
            </div>
        </>
    )
}

export default Filter_Section