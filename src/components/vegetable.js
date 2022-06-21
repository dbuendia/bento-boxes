import React from "react";

const Vegetable = ({ type }) => {
  return (
    <div className="vegetable">
      Vegetables:
      <ul>
        {type.map((elem) => {
          return <li>{elem}</li>;
        })}
      </ul>
    </div>
  );
};

export default Vegetable;
