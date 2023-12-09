function Product(props) {
  return (
    <div className="item">
      <img src={props.url}/>
      <div className="desc">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
export default Product;
