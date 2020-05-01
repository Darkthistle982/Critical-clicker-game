import React from "react";

const Card = (props) => (
  <div
    className="allCards col-lg-4"
    key={props.id}
    onClick={() => props.handleClicks(props.id, props.clicked)}
  >
    <img id={props.name} src={props.image} alt={props.name} />
  </div>
);

export default Card;