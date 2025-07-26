import { CDN_URL } from "../utils/constants"

const ResCard = {
  backgroundColor: "#f0f0f0",
}



const RestaurantCard = (props) => {
  const {infoArray} = props
  
  return (<>
    {infoArray.map((foodInfo, idx) => (
      <div className="res-card" style={ResCard} key={idx}>
      <img alt="ResLogo" className="res-logo" src={CDN_URL + foodInfo.cloudinaryImageId} />
      <h3>{foodInfo.name}</h3>
      <h4>{foodInfo.cuisines.join(",")}</h4>
      <h4>{foodInfo.avgRating} Stars</h4>
      <h4>{foodInfo.costForTwo}</h4>
      <h4>{foodInfo.sla.lastMileTravelString}</h4>
      <h4>{foodInfo.sla.deliveryTime} minutes</h4>
    </div>
    ))}
  </>
    
  )
}

export default RestaurantCard