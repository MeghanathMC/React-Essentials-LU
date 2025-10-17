import RestaurantCard from "./RestaurantCard";
import foodData from "../utils/foodData";


const Body =()=>{

  return (
    <div className="body">
    <div className="search">
    <input type="text" placeholder="What's the food u'r craving for?" />
    <button>search</button>
    </div>

    <div className="restro-container">
      {
        foodData.map((restaurant, index)=>(
            <RestaurantCard data={restaurant} key={index}/>
        ))
      }
    </div>
  </div>
  )
}

export default Body;