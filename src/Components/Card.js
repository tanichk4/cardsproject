import React from "react";

import CardWrapper from "./CardWrapper.js";

// приймаємо пропси щоб їх відрендерити в розмітці (CardWrapper) картки
export const Card = ({ owner, statistic, card }) => {
  return <CardWrapper owner={owner} statistic={statistic} card={card} />;
};
