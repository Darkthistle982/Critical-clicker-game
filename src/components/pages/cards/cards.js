import React from "react";
import "./card.css"

const Card = (props) => (
  <div
    className="allCards col-xl-3 col-lg-3 col-md-4 col-sm-5 col-xs-6"
    key={props.id}
    onClick={() => props.handleClick(props.id, props.clicked)}
  >
    <img id={props.name} src={props.image} alt={props.name} />
  </div>
);

export default Card;