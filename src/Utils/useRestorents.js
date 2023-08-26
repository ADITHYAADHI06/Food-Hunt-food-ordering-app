import { useState, useEffect } from "react";

const useRestorents = () => {
    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [filtered_Restaurants, setfiltered_Restaurants] = useState([]);
    // console.log(listOfRestaurants);
    // console.log(filtered_Restaurants);

    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            const dataJson = await data.json();

            let { restaurants } = dataJson?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle;
            let restaurantsData = restaurants.map((res) => { return res?.info; })
            setlistOfRestaurants(restaurantsData);
            setfiltered_Restaurants(restaurantsData)
        } catch (error) {
            setlistOfRestaurants([])
            setfiltered_Restaurants([])
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return { listOfRestaurants, filtered_Restaurants, setfiltered_Restaurants };
}

export default useRestorents