import React from "react";

const SingleTodo = ({ todo }) => {
  const { title, completed } = todo;
  // const isRed = {
  //   color: 'red'
  // }

  // const isGreen = {
  //   color: 'green'
  // }

  const isColor = {
    color: "green",
  };
  
  completed ? isColor.color = 'green' : isColor.color = 'red'
  return (
    <div className="product">   
      <h2 className="product__name" style={isColor}>{title}</h2>
    </div>
  );
};

export default SingleTodo;
