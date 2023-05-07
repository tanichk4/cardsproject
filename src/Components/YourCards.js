import React, { useContext } from "react";
import { CardsContext } from "./UseFetch.js";
import {
  PageContainer,
  InfoContainer,
  InfoIcon,
  InfoTitle,
} from "../Styles.js";
import { Link } from "react-router-dom";
import { Card } from "./Card.js";

const YourCards = () => {
  const { data } = useContext(CardsContext);

  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }

  console.log(data);

  return (
    <PageContainer>
      <InfoContainer>
        <InfoTitle>Your Cards</InfoTitle>
        <Link to="/newuser">
          <InfoIcon />
        </Link>
      </InfoContainer>
      {data.map(({ user_name, data, type, numbers, cvv }) => {
        return data.map(({ card, statistic }) => (
          <Card
            key={card.id}
            owner={user_name}
            statistic={statistic}
            card={card}
            type={type}
            numbers={numbers}
            cvv={cvv}
          />
        ));
      })}
    </PageContainer>
  );
};

export default YourCards;
