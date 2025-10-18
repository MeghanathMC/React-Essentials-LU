import { CLOUDINARY_URL } from "../utils/constants.js";

const RestaurantCard = ({ data }) => {
//   console.log(data);
  const {
    name,
    cloudinaryImageId,
    locality,
    areaName,
    avgRating,
    costForTwo,
    cuisines,
  } = data?.info;

  return (
    <div className="res-card">
      <div className="res-logo">
        <img src={CLOUDINARY_URL + cloudinaryImageId} />
      </div>
      <div className="res-info">
        <h2>{name}</h2>
        <h2>{costForTwo}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{`${locality}, ${areaName}`}</h4>
        <h4>Rating: {avgRating}</h4>
      </div>{" "}
    </div>
  );
};

export default RestaurantCard;
