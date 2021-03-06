import "./Card.css";
import React from "react";

export default (props) => {
  const cardStyle = {
    backgroundColor: props.cor || "#F00",
    borderColor: props.cor || "#F00",
  };

  return (
    <div className="Card" style={cardStyle}>
      <div className="Title">{props.titulo}</div>
      <div className="Content">{props.children}</div>
    </div>
  );
};
