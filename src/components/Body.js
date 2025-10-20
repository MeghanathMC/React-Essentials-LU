import RestaurantCard from "./RestaurantCard";
// import foodData from "../utils/foodData.js";
import { useEffect, useState } from "react";
import { RESTAURANT_LIST } from "../utils/constants.js";
import Shimmer from "./Shimmer.js";

const Body = () => {
  // by default the foodData is assigned to ratedRestaurants
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  console.log(searchItem);

  const fetchData = async () => {
    try {
      const response = await fetch(RESTAURANT_LIST);
      const json = await response.json();

      const restaurants =
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setAllRestaurants(restaurants);
      setFilterRestaurants(restaurants);
    } catch (error) {
      console.log("error in the api call", error);
      setFilterRestaurants([]);
      setAllRestaurants([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // if (!listRestaurants.length) {
  //   return <Shimmer />;
  // }
  console.log(filterRestaurants);

  return (
    // another way of writing if condition using ternary operator {conditional rendering}
    !allRestaurants.length ? (
      <Shimmer />
    ) : (
      <div className="body">
        <div className="search">
          <input
            type="text"
            placeholder="What's the food u'r craving for?"
            value={searchItem}
            onChange={(e) => {
              setSearchItem(e.target.value);

              if (searchItem === "") {
                setFilterRestaurants(allRestaurants);
              }
            }}
          />

          <button
            className="search-btn"
            onClick={() => {
              const searchList = allRestaurants.filter((res) => {
                return res?.info?.name
                  .toLowerCase()
                  .includes(searchItem.toLowerCase());
              });
              setFilterRestaurants(searchList);
            }}
          >
            search
          </button>
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = allRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setAllRestaurants(filteredList);
            }}
          >
            {" "}
            Filter Rated Restaurants
          </button>
        </div>

        <div className="restro-container">
          {filterRestaurants.map((restaurant) => (
            <RestaurantCard data={restaurant} key={restaurant?.info?.id} />
          ))}
        </div>
      </div>
    )
  );
};

export default Body;
