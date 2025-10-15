
import React from "react";
import ReactDOM from "react-dom/client";

/*

<div id="parent"> 
    <div id="children">
        <h1 id="heading1"> Heading 1 </h1>
        <h2 id="heading2"> Heading 2 </h2> 
    </div>
</div>
*/

// const heading = React.createElement("h1",{id:"heading"},"Hello from react");


const parent = React.createElement("div",{id:"parent"}, React.createElement("div",{id:"children"}, [React.createElement("h1",{id:"heading1"}, "Heading 1"), React.createElement("h2",{id:"heading2"},"Heading 2")]));

// React.createElement creates the object (it has type, and props called (attributes,children))
console.log(parent); 


const root= ReactDOM.createRoot(document.getElementById("root"));

// render method will convert the object into html that the browser understand
root.render(parent);    