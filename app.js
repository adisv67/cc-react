import React from "react";
import  ReactDOM  from "react-dom/client";
const HeadingComp = () => {
    return (
  
        <h1 className="heading">I'm a react Component</h1>
    )
}
const heading = (
    <>
        <h1 className="heading">I'm a react element</h1>
        <HeadingComp/>
    </>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

