import RestaurantCard from "./RestaurantCard";
// import foodData from "../utils/foodData.js";
import { useEffect, useState } from "react";
import { RESTAURANT_LIST } from "../utils/constants.js";
import Shimmer from "./Shimmer.js";

const Body = () => {
  // by default the foodData is assigned to ratedRestaurants
  const [listRestaurants, setListRestaurants] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(RESTAURANT_LIST);
      const json = await response.json();

      setListRestaurants(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
    } catch (error) {
      console.log("error in the api call", error);
      setListRestaurants([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!listRestaurants.length) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="What's the food u'r craving for?" />
        <button className="search-btn">search</button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListRestaurants(filteredList);
          }}
        >
          {" "}
          Filter Rated Restaurants
        </button>
      </div>

      <div className="restro-container">
        {listRestaurants.map((restaurant) => (
          <RestaurantCard data={restaurant} key={restaurant?.info?.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
