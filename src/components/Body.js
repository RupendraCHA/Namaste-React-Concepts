import RestaurantCard from "./RestaurantCard"
import resItems from "../utils/mockData"
import { useState } from "react"


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resItems)
    


  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" 
        onClick={() => {
            const filteredList = listOfRestaurants.filter((eachRes) => {

                return eachRes.info.avgRating > 4.3

            }
        )
            setListOfRestaurants(filteredList)
        }}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((data) => (
          <RestaurantCard key={data.info.id}  resData={data}/>
        ))}
        
      </div>
    </div>
  )}

  export default Body