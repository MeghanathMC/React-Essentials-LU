import { useState } from "react";
import "./App.css";
import Header from "./Header";
import ProductsMain from "./ProductsMain";
import Login from "./Login";
import MapArray from "./MapArray";

function App() {
  let [title, setTitle] = useState("Big Billion Days"); //implementing useState hook
  //hook is a function which let us to interact with react features
  //use State hook lets us to change the state of component that reflects in ui also
  //state is a data of component
  //component is a function that returns html content in the form of jsx
  return (
    <div className="App">
      <h1>{title}</h1>
      <button
        className="btn"
        onClick={() => {
          setTitle("Discount: You saved 10000 Rs");
        }}
      >
        Redeem
      </button>
      <Header />
      <ProductsMain />
      <Login />
      <MapArray />
    </div>
  );
}

export default App;
