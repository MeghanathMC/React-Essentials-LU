
const RestaurantCard =(props,index)=>{

        // console.log(props.data.info);
    const{name,resId,image, rating,locality,costText,ratingNew} = props.data.info;
   const{order}= props.data;

//   console.log(bulkOffers);

        // console.log(rating.rating_color);
    // console.log(bulkOffers);
   

    return(
        <div className="res-card" key={index}>
            <div className="res-logo">
                <img src={image.url}/>
            </div>
            <div className="res-info">
                <h1>{name}</h1>
                <h2>{costText.text}</h2>
                <h4>{locality.name}</h4>
                <h4>Rating: {rating.aggregate_rating}</h4>
                <h4>{rating.rating_subtitle}</h4>
                <h4>Delivery In: {order.deliveryTime}</h4>
                {/* <h4>{text}</h4> */}
            </div>
        </div>
    )
}

export default RestaurantCard;