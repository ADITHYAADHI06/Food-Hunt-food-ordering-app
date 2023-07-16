import { useState, useEffect } from "react";
import { swiggy_menu_api_URL } from "./constants"


const useCompleteSingleRestorentData = (resId) => {
    const [resInfo, SetResInfo] = useState(null);


    useEffect(() => {
        fecthData();
    }, []);


    const fecthData = async () => {
        try {
            const data = await fetch(swiggy_menu_api_URL + resId);
            const dataJson = await data.json();

            SetResInfo(dataJson?.data);

        } catch (error) {
            SetResInfo(null);
            console.log(error);
        }
    }


    return resInfo;
}


export default useCompleteSingleRestorentData;




