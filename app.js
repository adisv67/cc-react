import React from "react";
import  ReactDOM  from "react-dom/client";
const HeadingComp = () => {
    return (
    <div>
        <h1 className="heading">I'm a react Component</h1>
    </div>);
}
const heading = (
    <div>
        <h1 className="heading">I'm a react element</h1>,
        <HeadingComp/>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

