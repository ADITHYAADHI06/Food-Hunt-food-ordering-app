import React from 'react'
import styled from 'styled-components'
import Display_Main_Restorents from "../components/Display_Main_Restorents"
import Filter_Section from '../sub__components/Filter_Section'
import useOnlineStatus from '../Utils/useOnlineStatus'
import useRestorents from '../Utils/useRestorents'

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
    let { listOfRestaurants, filtered_Restaurants, setfiltered_Restaurants } = useRestorents();

    const onlineStatus = useOnlineStatus();
    if (!onlineStatus) {
        return <h1>your offline!.... please check yout connection.</h1>
    }

    // if (listOfRestaurants.length === 0) {
    //     return <Shimmer />
    // }




    return (
        <Body__wrapper>

            <Filter_Section setfiltered_Restaurants={setfiltered_Restaurants} listOfRestaurants={listOfRestaurants} />

            <div>
                <h2 className='text-5xl font-bold'>Top Restorents in your Location</h2>
                <Display_Main_Restorents filtered_Restaurants={filtered_Restaurants} />
            </div>

        </Body__wrapper>
    )
}

export default Body
