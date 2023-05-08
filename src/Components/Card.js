import React from "react";
import CardWrapper from "./CardWrapper.js";

export const Card = ({ owner, statistic, card }) => {
  return <CardWrapper owner={owner} statistic={statistic} card={card} />;
};
