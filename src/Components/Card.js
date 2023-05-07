import React from "react";

import CardWrapper from "./CardWrapper.js";

// приймаємо пропси щоб їх відрендерити в розмітці (CardWrapper) картки
export const Card = ({ owner, statistic, card, type, numbers, cvv }) => {
  return (
      <CardWrapper owner={owner} statistic={statistic} card={card} type={type} numbers={numbers} cvv={cvv} />
  );
};
