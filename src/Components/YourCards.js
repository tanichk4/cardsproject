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

  return (
    <PageContainer>
      <InfoContainer>
        <InfoTitle>Your Cards</InfoTitle>
        <Link to="/newuser">
          <InfoIcon />
        </Link>
      </InfoContainer>
      {data.map(({ user_name, data }) => {
        return data.map(({ card, statistic }) => (
          <Card
            owner={user_name}
            statistic={statistic}
            stats={statistic.stats}
            card={card}
          />
        ));
      })}
    </PageContainer>
  );
};

export default YourCards;
