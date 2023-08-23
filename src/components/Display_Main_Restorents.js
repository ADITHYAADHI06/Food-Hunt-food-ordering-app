import Restaurant_card, { WithPromoted } from '../sub__components/Restaurant_card'
import Shimmer from './Shimmer'

const Display_Main_Restorents = ({ filtered_Restaurants }) => {

    const RestoWithPromoted = WithPromoted(Restaurant_card);
    return (
        <>
            {
                filtered_Restaurants.length === 0 ? (<Shimmer />) : (<div className='grid grid-four-column res_container '>
                    {
                        filtered_Restaurants.map((restaurant) => restaurant.promoted ? <RestoWithPromoted key={restaurant.id} restaurant={restaurant} /> : <Restaurant_card key={restaurant.id} restaurant={restaurant} />)
                    }
                </div>)
            }
        </>
    );
}

export default Display_Main_Restorents;