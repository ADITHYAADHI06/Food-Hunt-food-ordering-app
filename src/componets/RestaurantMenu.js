import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import styled from 'styled-components'
import Shimmer from './Shimmer';
import { CiSearch } from 'react-icons/ci';
import { CgTimelapse } from 'react-icons/cg';
import { CgToggleSquare } from 'react-icons/cg';
import { RiMoneyCnyCircleLine } from 'react-icons/ri';
import { AiFillStar } from 'react-icons/ai';
import { CgToggleSquareOff } from 'react-icons/cg';

// import RecommendedComp from '../sub__components/RecommendedComp';

import useCompleteSingleRestorentData from "../Utils/useCompleteSingleRestorentData"
import Resto_Catogerys from '../sub__components/Restorent_Catogerys';
import Restorent_Catogerys from '../sub__components/Restorent_Catogerys';



const Menu__Wrapper = styled.main` 
       padding: 3rem 15rem;
  
       .res_container{
              margin: 0 auto;
              max-width:120rem;
              /* background-color  :red ; */
       }
       .menuTopHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
       .left {
        font-size: 1.2rem;
        color: #959aa1;
        :hover{
            color: #535665;

        }
        .name{
        color: #3d4152;
        font-size: 1.2rem;
        }
        }
        .right{
        font-size: 2.2rem;
        }
       }

       .RestaurantHeader_wrapper{
             padding: 5rem 1.5rem 0rem 1.5rem;
             
             .left .RestaurantHeader_main_address_wrapper{
                display: flex;
                justify-content: space-between;
                 border: none;
                 border-bottom:1px dashed #d3d3d3;
                 margin-bottom: 1.8rem;
                 .right{
                    border: 1px solid #e9e9eb;
                    box-shadow: 0 1px 5px #f9f9f9;
                    border-radius: 6px;
                    text-align: center;
                    padding: 10px;
                    max-width: 100px;
                    margin-bottom: 1.5rem;
                    /* float: right; */
                 .top{
                    display: flex;
                    align-items:center;
                    justify-content: center;
                    color: #3d9b6d;
                    padding-bottom: 10px;
                    border-bottom: 1px solid #e9e9eb;
                    font-weight: 700;
                    margin-bottom: 8px;
                    font-size: 2rem;
                    span{
                        margin-left: .5rem;
                    }
                 }
                 .right .bottom{           
                    font-size: 1.1rem;
                    color: #8b8d97;
                    font-weight: 600;
                 }
                }
             }
             .left .RestaurantHeader_main_address_wrapper h1{
                 font-size: 2.2rem;
                font-weight: 600;
                color: #282c3f;
                margin-bottom: 8px;
                text-transform: capitalize;
             }
             .left .RestaurantHeader_main_address_wrapper p{
                font-size: .93rem;
                color: #7e808c;
                margin-bottom: 4px;
                white-space: nowrap;
                span{
                    color: red;
                }
            }
       }

.Offers_row_wrapper{
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;
overflow-x: scroll;
}

.Offers_boxes{
    border-radius: 8px;
     border: 1px solid #e9e9eb; 
     padding: 8px; 
    box-shadow: 0 1px 2px rgba(0,0,0,.04); 
    min-width: 20rem;
}
.Offers_boxes .top{
  display: flex;
  align-items: center;
  font-size: 1.07rem;
    font-weight: 600;
    white-space: nowrap;
    color: #686b78;
    img{
        width: 2rem;
    height: 2rem;
    margin-right: 0.8rem;
    }
}

.Offers_boxes .bottom{
    font-size: .86rem;
    color: #93959f;
    margin-top: 4px;
    font-weight: 700;
}
.RestaurantHeader_cost_time_wrapper_{
display: flex;
gap: 2rem;
    color: #3e4152;
    font-size: 15px;
    font-weight: 700;
    .Delivary_Time{
        display: flex;
        align-items: center;
    }
    .Cost_for_Two{
        display: flex;
        align-items: center;
        
    }
    .icon{
        margin-right: 1rem;
        font-size: 1.8rem;
    }
}

.Offers_row_wrapper::-webkit-scrollbar {
  display: none !important;
}

.Veg_Only_wrapper{    
    margin-top: 3.5rem;
    display: flex;
    align-items: center;
    h4{
        font-size: 1rem;
        color: #3d4152;
        font-weight: 600;
        margin-right: 0.8rem;
    }
    .icon{
        font-size: 2rem;
    }
}

 

.vegToggleButton{
    color: green !important;
}
        `
const RestaurantMenu = () => {

    const { resid } = useParams();


    const completeSingleRestorentData = useCompleteSingleRestorentData(resid);

    const restorentInformation = completeSingleRestorentData?.cards[0]?.card?.card?.info;
    const MenuCatogerys = completeSingleRestorentData?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((curElem) => { return curElem?.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'; })
    // console.log(MenuCatogerys);


    const [vegOnly, setVegOnly] = useState(false);
    const [menuStates, setMenuStates] = useState({ recommended: true, secMenuVariable: false, NonvegStarter: false })
    // if (completeSingleRestorentData === null) return <Shimmer />

    // if (vegOnly) {
    //     recommended_array = recommended ? recommended.map((c) => { return c?.card?.info; }) : [];
    // }


    return !completeSingleRestorentData ? (
        <Shimmer />
    ) : (
        <Menu__Wrapper>
            {
                console.log("body renders")
            }
            <div className='res_container'>
                {/* top */}
                <div className='menuTopHeader'>
                    <div className='left'>Home<span>&nbsp;</span>&nbsp;/&nbsp;<span>&nbsp;</span>{restorentInformation.city}<span>&nbsp;</span>&nbsp;/&nbsp;<span>&nbsp;</span><span className='name'>{restorentInformation.name}</span></div>
                    <div className='right'><CiSearch /></div>
                </div>
                <div className='RestaurantHeader_wrapper'>
                    <div className='left'>
                        <div className='RestaurantHeader_main_address_wrapper'>
                            <div className='left'>
                                <h1 className=''>{restorentInformation.name}</h1>
                                <p>{restorentInformation.cuisines.join(", ")}</p>
                                <p>{restorentInformation.locality},{restorentInformation.city}<span>▾</span></p>
                            </div>
                            <div className='right'>
                                <div className='top'><AiFillStar /> <span>{restorentInformation.avgRating}</span></div>
                                <div className='bottom'>{restorentInformation.totalRatingsString}</div>
                            </div>
                        </div>
                        <div className='RestaurantHeader_cost_time_wrapper_'>
                            <div className='Delivary_Time'><CgTimelapse className='icon' /><span>42 MINS</span></div>
                            <div className='Cost_for_Two'><RiMoneyCnyCircleLine className='icon' /><span>{restorentInformation.costForTwoMessage}</span></div>
                        </div>
                    </div>
                    <div className='Offers_row_wrapper'>
                        <div className='Offers_boxes'>
                            <div className='top'><img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/rng/md/ads/production/1acdb97aadcb61b323307845bda86535' alt='this is icon' /> <span>20% of upto ₹120</span></div>
                            <div className='bottom'><span>USE FEDERALCC | ABOVE ₹249</span></div>
                        </div>
                        <div className='Offers_boxes'>
                            <div className='top'><img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/rng/md/ads/production/1acdb97aadcb61b323307845bda86535' alt='this is icon' /> <span>20% of upto ₹120</span></div>
                            <div className='bottom'><span>USE FEDERALCC | ABOVE ₹249</span></div>
                        </div>
                        <div className='Offers_boxes'>
                            <div className='top'><img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/rng/md/ads/production/1acdb97aadcb61b323307845bda86535' alt='this is icon' /> <span>20% of upto ₹120</span></div>
                            <div className='bottom'><span>USE FEDERALCC | ABOVE ₹249</span></div>
                        </div>
                        <div className='Offers_boxes'>
                            <div className='top'><img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/rng/md/ads/production/1acdb97aadcb61b323307845bda86535' alt='this is icon' /> <span>20% of upto ₹120</span></div>
                            <div className='bottom'><span>USE FEDERALCC | ABOVE ₹249</span></div>
                        </div>




                    </div>
                    <div className='Veg_Only_wrapper'><h4>Veg Only</h4>{vegOnly ? <CgToggleSquareOff onClick={() => { setVegOnly(false); }} className='icon vegToggleButton' /> : <CgToggleSquare onClick={() => { setVegOnly(true) }} className='icon' />}</div>
                    <hr />




                    {/* RecommendedMenu ? */}

                    <div className='Restorent_Menu'>
                        {
                            MenuCatogerys ? MenuCatogerys.map((curElem, i) => {
                                const { title, itemCards } = curElem?.card?.card;
                                return (
                                    <Restorent_Catogerys title={title} itemCards={itemCards} />
                                )
                            }) : <Shimmer />
                        }
                    </div>
                </div>
            </div>
        </Menu__Wrapper>
    );
}





export default RestaurantMenu



